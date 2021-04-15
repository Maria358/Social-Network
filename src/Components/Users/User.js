import styles from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const User = (props) => {

    let users = props.users
    let userPhoto = 'https://i.pinimg.com/564x/71/c4/f3/71c4f37425bd3775d98bfaedbf349823.jpg'

    return <div>
            <span>
            <div>
            <NavLink to={'/profile/' + users.id}>
                <img
                    src={users.photos.small != null ? users.photos.small : userPhoto}
                    className={styles.userPhoto}/>
            </NavLink>
            </div>
            <div>
        {users.followed
            ? <button disabled={props.followingInProgress.some(id => id === users.id)} onClick={() => {
                props.unfollow(users.id)
            }}>Unfollow</button>
            : <button disabled={props.followingInProgress.some(id => id === users.id)} onClick={() => {
                props.follow(users.id)
            }}>Follow</button>}

            </div>
            </span>
        <span>
            <span>
            <div>{users.name}</div>
            <div>{users.status}</div>
            </span>
            <span>
            <div>{'users.location.country'}</div>
            <div>{'users.location.city'}</div>
            </span>
            </span>
        }

    </div>
}
export default User