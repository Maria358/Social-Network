import Content from "./Content";
import React from "react";
import {connect} from "react-redux";
import {getStatus, getUserProfile, saveData, savePhoto, updateStatus} from "../../Redux/profile-reducer";
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";

class ContentContainer extends React.Component {
    refreshProfile(){
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>

        return (
            <Content {...this.props}
                     profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto}
                     isOwner={!this.props.match.params.userId} saveData={this.props.saveData}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus,updateStatus,savePhoto, saveData}),
    withRouter,
    withAuthRedirect
)(ContentContainer)