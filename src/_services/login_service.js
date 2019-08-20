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

const getChannelList = (page,limit) => {
return http.get(`${config.apiUrl}channel/?page=${page}&limit=${limit}&search=ch`).then(
    data=>{
        return data ? data: '';
    }
)
}

const getBroadcastList = () => {
    return http.get(`${config.apiUrl}broadcaster/`).then(
        data=>{
            return data ? data: '';
        }
    )
}
const getRegionList = () =>{
    return http.get(`${config.apiUrl}region/`).then(
        data =>{
            return data ? data: '';
        }
    )
}
const getLanguageList = () =>{
    return http.get(`${config.apiUrl}language/`).then(
        data=>{
            return data ? data: '';
        }
    )
}

const getGenreList =() =>{
    return http.get(`${config.apiUrl}genre/`).then(
        data=>{
            return data ? data: '';
        }
    )
}

const uploadImage = (data) => {
    return http.fileUpload(`${config.apiUrl}channel/upload-image`, data).then(
        data=>{
            return data ? data: ''
        }
    )
}

export const loginService = {
    postLogin,
    postLogout,
    getChannelList,
    getBroadcastList,
    getRegionList,
    getLanguageList,
    getGenreList,
    uploadImage
};
