import s from './Header.module.css'
import {NavLink} from "react-router-dom"

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://i.pinimg.com/736x/14/86/2d/14862d2e4f7f06d7e96b9a752f3a51e8.jpg'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div className={s.login}>{props.login} <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>

}
export default Header;