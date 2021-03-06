import {authAPI} from "../Api/api";

let SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'

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
                ...action.payload
            }
        default:
            return state
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
}

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.getAuthMe()

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe = false) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer