import s from './../../FormControls/formControl.module.css'
import Post from './Post/Post'
import * as React from "react";
import {Formik, Field, Form} from "formik";
import BasicFormSchema from "../../FormControls/formControlProfile";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)


    let addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.container}>
        <div className={s.posts}>
            <Formik
                initialValues={{
                    newPostText: "",
                }}
                validationSchema={BasicFormSchema}
                onSubmit={values => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 500);
                    console.log(values)
                    addPost(values)
                }}
                render={(props) => (
                    <Form className={s.formContainer}>
                        <h3>My posts</h3>
                        <div>
                            <div className={s.textarea}>
                                <Field
                                    placeholder='Enter your post'
                                    component='textarea'
                                    name='newPostText'
                                    type="text"/>
                                {props.errors.newPostText &&
                                props.touched.newPostText && <div className={s.fieldError}>{props.errors.newPostText}</div>}
                            </div>
                            <div className={s.button}>
                                <button type="submit">Add post</button>
                            </div>
                        </div>
                        {postsElements}
                    </Form>
                )}
            />
        </div>
        </div>

    )
}

export default MyPosts;