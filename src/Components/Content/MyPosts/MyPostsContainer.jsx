import * as React from "react";
import {addPostActionCreator, newPostChangeActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.post
    }
}

let mapDispatchTpProps = (dispatch) => {
    return{
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchTpProps)(MyPosts)


export default MyPostsContainer