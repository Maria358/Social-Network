import {authAPI} from "../Api/api";

let SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userPhoto: null,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export const setAuthUserData = (userId,email,login) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {userId,email,login}
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuthMe()
            .then(response => {
                if(response.data.resultCode === 0) {
                    console.log("Hi")
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

export default authReducer