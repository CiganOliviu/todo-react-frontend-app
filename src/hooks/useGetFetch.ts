import { useState } from 'react';
import { FetchResponse } from "../utils/types";

const useGetFetch = <Data, Param>(url: RequestInfo): FetchResponse<Data, Param> => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [apiData, setApiData] = useState<Data | null>(null);
    const [serverError, setServerError] = useState(null);
    const [serverStatus, setServerStatus] = useState<number>(200);

    const fetcher = async (token?: Param) => {
        setIsLoading(true);
        try {
            const request = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { Authorization: `Bearer ${token}` })
                }
            });

            setServerStatus(request.status);
            const response = await request.json();

            if (response.error) {
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
        status: serverStatus,
        fetcher
    };
};

export default useGetFetch;