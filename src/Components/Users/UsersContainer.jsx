import {connect} from "react-redux";
import {
    setCurrentPage,
    follow,
    unfollow,
    toggleFollowingInProgress, getUsers
} from "./users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps,{follow,unfollow,toggleFollowingInProgress,setCurrentPage,getUsers}),
    withAuthRedirect
)(UsersContainer)

