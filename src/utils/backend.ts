const backendEnvironment = 'http://localhost:8080';
const routeBase = 'api';
const authRouteBase = 'auth'
const idParam = ':id';

export const requestUrls = {
    login: `${backendEnvironment}/${routeBase}/${authRouteBase}/authenticate`,
    register: `${backendEnvironment}/${routeBase}/${authRouteBase}/register`,
    tasks: `${backendEnvironment}/${routeBase}/task`,
    task: `${backendEnvironment}/${routeBase}/task/${idParam}`
}