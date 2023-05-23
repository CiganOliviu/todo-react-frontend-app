const backendEnvironment = 'http://localhost:8080';
const routeBase = 'api';
const authRouteBase = 'auth'

export const requestUrls = {
    login: `${backendEnvironment}/${routeBase}/${authRouteBase}/authenticate`,
    register: `${backendEnvironment}/${routeBase}/${authRouteBase}/register`,
    tasks: `${backendEnvironment}/${routeBase}/task`
}