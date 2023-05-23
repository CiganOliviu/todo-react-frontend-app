import { createContext, FC, useContext, useEffect, useState } from 'react';
import usePersistentState, { removeStorage, setStorage } from "./usePersistentState";
import { AuthResponseType, CredentialsPayloadType, RegisterPayloadType } from "../utils/types";
import { useNavigate } from "react-router-dom";
import { requestUrls } from "../utils/backend";
import { pageRoutes } from "../utils/dataStructures";
import usePostFetch from "./usePostFetch";

const useAuthenticationService = () => {
    const navigate = useNavigate();
    const { set: setEmail } = usePersistentState('email');
    const { set: setToken } = usePersistentState('token');
    const { store: isLoggedIn, set: setIsLoggedIn } = usePersistentState('isLoggedIn');
    const {
        response: loginResponse,
        error: loginError,
        loading: loginLoading,
        fetcher: sendLoginPayload
    } = usePostFetch<AuthResponseType, CredentialsPayloadType>(requestUrls.login);
    const {
        response: registerResponse,
        error: registerError,
        loading: registerLoading,
        fetcher: sendRegisterPayload
    } = usePostFetch<AuthResponseType, RegisterPayloadType>(requestUrls.register);

    const [directTokenAccess, setDirectTokenAccess] = useState<string>('');

    const logUserIn = (email: string, password: string) => {
        const payload = {
            email: email,
            password: password,
        };

        sendLoginPayload(payload);
    };

    const registerUser = (firstname: string, lastname: string, email: string, password: string) => {
        const payload = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        };

        sendRegisterPayload(payload);
    }

    const setAuthFields = (props?: AuthResponseType) => {
        setIsLoggedIn(!!props);
        setEmail(props ? props.email : '');
        setToken(props ? props.token : '');
        setDirectTokenAccess(props ? props.token : '');
    };

    const logUserOut = async () => {
        removeStorage('token');
        removeStorage('tokenExpiration');
        removeStorage('roles');
        setStorage('loggedIn', false);
        navigate(pageRoutes.HOME);
    };

    useEffect(() => {
        if (loginResponse) {
            setAuthFields(loginResponse);
            navigate(pageRoutes.HOME);
        }
        // eslint-disable-next-line
    }, [loginError, loginResponse, loginLoading]);

    useEffect(() => {
        if (registerResponse) {
            setAuthFields(registerResponse);
            navigate(pageRoutes.HOME);
        }
        // eslint-disable-next-line
    }, [registerError, registerResponse, registerLoading])

    return {
        directTokenAccess,
        isLoggedIn,

        logUserIn,
        registerUser,
        logUserOut,
        setIsLoggedIn
    };
};

const initialState = {
    directTokenAccess: null,
    isLoggedIn: false,
    error: null,
    logUserIn: (user: string, pass: string) => undefined,
    registerUser: (firstname: string, lastname: string, email: string, password: string) => undefined,
    logUserOut: () => undefined
};

export const AuthContext = createContext<ReturnType<typeof useAuthenticationService> | typeof initialState>(initialState);

export const AuthProvider: FC<any> = ({ children }) => {
    const auth = useAuthenticationService();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthentication = () => useContext(AuthContext);