import './App.css';
import React, { Suspense } from 'react';
import Nav from './Components/Nav/Nav';
import {BrowserRouter, Redirect, Route} from "react-router-dom"
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ContentContainer from "./Components/Content/ContentContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader";
import {withSuspense} from "./Hoc/withSuspense";

const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer"));
const Login = React.lazy(() => import("./Components/Login/Login"));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Route exact path='/'
                               render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ContentContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/users'
                               render={withSuspense(UsersContainer)}/>
                        <Route path='/login'
                               render={withSuspense(Login)}/>
                    </div>

                </div>
            </BrowserRouter>
        )
    }
}
 const mapStateToProps = (state) => ({
     initialized: state.app.initialized
 })

export default connect(mapStateToProps, {initializeApp})(App);
