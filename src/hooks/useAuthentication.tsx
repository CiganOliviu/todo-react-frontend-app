import { createContext, FC, useContext, useEffect, useState } from 'react';
import usePersistentState, { removeStorage, setStorage } from "./usePersistentState";
import { AuthResponseType, CredentialsType } from "../utils/types";
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
    } = usePostFetch<AuthResponseType, CredentialsType>(requestUrls.login);

    const [directTokenAccess, setDirectTokenAccess] = useState<string>('');

    const logUserIn = (username: string, password: string) => {
        const payload = {
            username: username,
            password: password,
        };

        sendLoginPayload(payload);
    };

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

    return {
        directTokenAccess,
        isLoggedIn,

        logUserIn,
        logUserOut,
        setIsLoggedIn
    };
};

const initialState = {
    directTokenAccess: null,
    isLoggedIn: false,
    error: null,
    logUserIn: (user: string, pass: string) => undefined,
    logUserOut: () => undefined
};

export const AuthContext = createContext<ReturnType<typeof useAuthenticationService> | typeof initialState>(initialState);

export const AuthProvider: FC<any> = ({ children }) => {
    const auth = useAuthenticationService();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthentication = () => useContext(AuthContext);