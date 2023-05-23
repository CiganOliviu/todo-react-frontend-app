export type FetchResponse<data, param> = {
    response: data | null;
    error: any;
    loading: boolean;
    fetcher: (arg: param, token?: string, isFormData?: boolean) => any;
};

export type AuthResponseType = {
    email: string;
    token: string;
};

export type CredentialsType = {
    username: string;
    password: string;
};