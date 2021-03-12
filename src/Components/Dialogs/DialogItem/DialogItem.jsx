import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.avaItems}>
                <img src = 'https://i.pinimg.com/564x/d5/c1/61/d5c1619b2807cc187e4fa43d44ead786.jpg'/>
            </div>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
 export default DialogItem