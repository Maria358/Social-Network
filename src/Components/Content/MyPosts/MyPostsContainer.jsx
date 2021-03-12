import * as React from "react";
import {addPostActionCreator, newPostChangeActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchTpProps = (dispatch) => {
    return{
        updateNewPostText: (e) => {
            let text = e.target.value
            dispatch(newPostChangeActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchTpProps)(MyPosts)


export default MyPostsContainer