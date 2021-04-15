import {userAPI} from "../../Api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CURRENT_PAGE = 'CURRENT_PAGE'
const TOTAL_COUNT = 'TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    portionSize: 10

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
                ...state, users: [...action.users]
            }
        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
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

export const requestUsers = (page, pageSize) => async (dispatch) => {

    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    let data = await userAPI.getUsers(page, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalCount(data.totalCount))

}

const followUnfollowFlow = async(dispatch, apiMethod, userId, actionCreator) => {

    dispatch(toggleFollowingInProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const unfollow = (userId) => async (dispatch) =>  {
    let apiMethod = userAPI.unfollow.bind(userAPI)
    followUnfollowFlow(dispatch, apiMethod, userId, unfollowSuccess)
}

export const follow = (userId) => async (dispatch) => {
    let apiMethod = userAPI.follow.bind(userAPI)
    followUnfollowFlow(dispatch, apiMethod, userId, followSuccess)
}


export default usersReducer