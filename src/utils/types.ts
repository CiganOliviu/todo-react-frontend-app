export type FetchResponse<data, param> = {
    response: data | null;
    error: any;
    loading: boolean;
    fetcher: (arg: param, token?: string, optionalUrl?: string) => any;
};

export type AuthResponseType = {
    email: string;
    token: string;
};

export type CredentialsPayloadType = {
    email: string;
    password: string;
};

export type RegisterPayloadType = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
};

export type TaskType = {
    id?: number;
    name: string;
    estimation?: string;
    type?: string;
}