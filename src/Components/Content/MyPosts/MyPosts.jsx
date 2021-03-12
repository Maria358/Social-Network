import s from './MyPosts.module.css'
import Post from './Post/Post'
import * as React from "react";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)


    let addPost = () => {
        props.addPost()
    }

    let newPostChange = (text) => {
        props.updateNewPostText(text)
    }

    return (

        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.textarea}>
                    <textarea onChange={newPostChange}
                              placeholder='Enter your post'
                              value ={props.newPostText} />
                </div>
                <div className={s.button}>
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>
            {postsElements}
        </div>

    )
}

export default MyPosts;