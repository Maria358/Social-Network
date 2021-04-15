import {profileAPI, userAPI} from "../Api/api";

let ADD_POST = 'ADD_POST'
let SET_USER_PROFILE = 'SET_USER_PROFILE'
let SET_STATUS = 'SET_STATUS'
let SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
let SAVE_DATA_SUCCESS = 'SAVE_DATA_SUCCESS'

let initialState = {
    post: [{id: 1, message: 'I am mine before i am ever anyone else\'s', likeCount: '377'},
        {id: 2, message: 'Thank yourself for how far you\'ve come. It hasn\'t easy', likeCount: '526'},
        {id: 3, message: 'Feel your feelings', likeCount: '930'},
        {id: 4, message: 'Faking a smile is easier than explaining why you\'re sad', likeCount: '207'},
        {id: 5, message: 'Your future needs you, your past doesn\'t', likeCount: '120'}],
    profile: null,
    status: ''

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 110
            }
            return {
                ...state,
                post: [...state.post, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }

        default:
            return state;

    }
}
export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)

    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data))

}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveData = (profile) => async (dispatch, getState) => {
    debugger
    const userId = getState().auth.userId
    const response = await profileAPI.saveData(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
}

export default profileReducer