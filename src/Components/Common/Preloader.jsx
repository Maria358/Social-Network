import styles from "../Users/UsersContainer.module.css";
import React from "react";

let Preloader = (props) => {
    return <div>
        <img className={styles.preloader}
             src='https://i.pinimg.com/originals/e6/33/f5/e633f5e8dc384027938aeef9b0b7ede0.gif'/>
    </div>
}
export default Preloader