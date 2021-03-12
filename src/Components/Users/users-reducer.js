import {userAPI} from "../../Api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CURRENT_PAGE= 'CURRENT_PAGE'
const TOTAL_COUNT= 'TOTAL_COUNT'
const TOGGLE_IS_FETCHING= 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS= 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((users) => {
                    if (users.id === action.userId) {
                        return {...users, followed: true}
                    }
                    return users
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((users) => {
                    if (users.id === action.userId) {
                        return {...users, followed: false}
                    }
                    return users
                })

            }
        case SET_USERS:
            return {
                ...state, users: [ ...action.users]
            }
        case CURRENT_PAGE:
            return{
                ...state, currentPage: action.currentPage
            }
        case TOTAL_COUNT:
            return{
                ...state, totalUserCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return{
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            debugger
            return{
                ...state, followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export let followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export let unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export let setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export let setCurrentPage = (currentPage) => {
    return {
        type: CURRENT_PAGE,
        currentPage
    }
}

export let setTotalCount = (totalCount) => {
    return {
        type: TOTAL_COUNT,
        totalCount
    }
}

export let toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export let toggleFollowingInProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))

        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true,userId))
        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
               dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true,userId))
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }
}



export default usersReducer