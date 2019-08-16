import { http } from '../http-handler/httphandler';
import { config } from '../env'
const postLogin = (data) => {
    return http.post(`${config.apiUrl}user/login`, data).then(data => {
        return data ? data : '';
    });
};

const postLogout = (data) => {
    return http.post(`${config.apiUrl}user/logout`).then(data => {
        return data ? data : '';
    });
}

export const loginService = {
    postLogin,
    postLogout
};
