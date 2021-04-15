import React from 'react'
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../Redux/authReducer";
import Header from "./Header";




class HeaderContainer extends React.Component{
    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)