import { useState } from 'react';

type localStorageKeys = {
    email?: string;
    token?: string;
    isLoggedIn?: boolean;
};

const getStorage = (key: string) => {
    const item = localStorage.getItem(key);
    if (item) {
        try {
            return JSON.parse(item);
        } catch (e) {
            return item;
        }
    }
    return null;
};

export const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, value);
};

export const removeStorage = (key: string) => {
    localStorage.removeItem(key);
}

const usePersistentState = (key: keyof localStorageKeys) => {
    const [store, setStore] = useState(getStorage(key));

    const set = (value: any) => {
        setStorage(key, value);
        setStore(value);
    };

    return {
        store,
        set
    };
};

export default usePersistentState;