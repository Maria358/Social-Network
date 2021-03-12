import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Content from './Components/Content/Content';
import {BrowserRouter, Route} from "react-router-dom"
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ContentContainer from "./Components/Content/ContentContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ContentContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users'
                           render={() => <UsersContainer />}/>
                    <Route path='/login'
                           render={() => <Login />}/>
                </div>

            </div>
        </BrowserRouter>
    )
}


export default App;
