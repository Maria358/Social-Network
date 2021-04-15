import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '86f08981-b095-4248-9d12-4efadecc2c0e'
    }
})

export const userAPI = {
    getUsers(currentPage = 1,pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow (userId) {
        return instance.post(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/`+ userId)
    },
    getStatus (userId) {
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto (photos) {
        const data = new FormData();
        data.append('image', photos);
        return instance.put(`profile/photo`, data, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        })
    },
    saveData (profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    getAuthMe () {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    },
}







