import {connect} from "react-redux";
import {
    setCurrentPage,
    follow,
    unfollow,
    toggleFollowingInProgress, requestUsers
} from "./users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount, getUsers
} from "../../Redux/users-selectors";



class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} =  this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChange = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   portionSize={this.props.portionSize}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),
        portionSize:getPortionSize(state)
    }
}

export default compose(
    connect(mapStateToProps,{follow,unfollow,toggleFollowingInProgress,
        setCurrentPage,getUsers: requestUsers}),
    withAuthRedirect
)(UsersContainer)

