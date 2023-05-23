import usePersistentState from './usePersistentState';
import { useAuthentication } from "./useAuthentication";

const useValidateUser = () => {
    const { isLoggedIn } = useAuthentication();
    const { store: token } = usePersistentState('token');

    const isUserValid = isLoggedIn && !!token;

    return {
        isUserValid,
        token
    };
};

export default useValidateUser;