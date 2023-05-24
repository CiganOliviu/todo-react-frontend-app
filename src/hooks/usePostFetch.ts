import { useState } from 'react';
import { FetchResponse } from "../utils/types";

const usePostFetch = <Data extends any, Param extends any>(url: RequestInfo, method?: 'PUT' | 'DELETE'): FetchResponse<Data, Param> => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [apiData, setApiData] = useState<Data | null>(null);
    const [serverError, setServerError] = useState(null);

    const fetcher = async (param?: Param, token?: string, optionalUrl?: string) => {

        const finalUrl = optionalUrl || url;
        setIsLoading(true);
        try {
            const request = await fetch(finalUrl, {
                method: method || 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    ...(token && { Authorization: `Bearer ${token}` })
                },
                ...(param && {
                    body: JSON.stringify(param)
                })
            });

            const response = await request.json();
            if (response.errors) {
                setServerError(response);
            } else {
                setApiData(response);
            }

            setIsLoading(false);
        } catch (error: any) {
            setServerError(error);
            setIsLoading(false);
        }
    };

    return {
        response: apiData,
        error: serverError,
        loading: isLoading,
        fetcher
    };
};

export default usePostFetch;