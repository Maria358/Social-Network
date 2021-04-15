import React from "react";
import Paginator from "../FormControls/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return <div>
        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                   currentPage={props.currentPage} onPageChange={props.onPageChange} portionSize={props.portionSize}/>

        {
            props.users.map(u => <User users={u} followingInProgress={props.followingInProgress}
                                       unfollow={props.unfollow} follow={props.follow} key={u.id}/>)
        }

    </div>
}
export default Users