import {profileAPI, userAPI} from "../Api/api";

let ADD_POST = 'ADD_POST'
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let SET_USER_PROFILE = 'SET_USER_PROFILE'
let SET_STATUS = 'SET_STATUS'

let initialState = {
    post: [{id: 1, message: 'I am mine before i am ever anyone else\'s', likeCount: '377'},
        {id: 2, message: 'Thank yourself for how far you\'ve come. It hasn\'t easy', likeCount: '526'},
        {id: 3, message: 'Feel your feelings', likeCount: '930'},
        {id: 4, message: 'Faking a smile is easier than explaining why you\'re sad', likeCount: '207'},
        {id: 5, message: 'Your future needs you, your past doesn\'t', likeCount: '120'}],
    newPostText: '',
    profile: null,
    status: ''

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE:{
            return{
                ...state, profile: action.profile
            }
        }
        case SET_STATUS:{
            return{
                ...state, status: action.status
            }
        }

        default:
            return state;

    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const newPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
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

export const getUserProfile = (userId) => {
    return (dispatch) =>
    {
        userAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getStatus = (userId) => {
    return (dispatch) =>
    {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))

            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) =>
    {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer