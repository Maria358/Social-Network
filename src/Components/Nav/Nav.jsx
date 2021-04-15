import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={s.nav}>
        <ul className={s.list}>
            <li>
                <NavLink to='/Profile'>Profile</NavLink>
            </li>
            <li>
                <NavLink to='/dialogs'>Messages</NavLink>
            </li>
            <li>
                <NavLink to='/News'>News</NavLink>
            </li>
            <li>
                <NavLink to='/Music'>Music</NavLink>
            </li>
            <li>
                <NavLink to='/Settings'>Settings</NavLink>
            </li>
            <li>
                <NavLink to='/users'>Users</NavLink>
            </li>
        </ul>
    </nav>

}
export default Nav;