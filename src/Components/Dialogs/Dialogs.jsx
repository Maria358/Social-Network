import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";
import {Formik, Field, Form} from "formik";
import styles from './../FormControls/formControl.module.css'
import BasicFormSchema from "../FormControls/formControlMessage";


const Dialogs = (props) => {

    let state = props.messagePage

    let dialogsElements = state.dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.message.map(m => <Message text={m.text}/>)


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <Formik
                initialValues={{
                    newMessageBody: "",
                }}
                validationSchema={BasicFormSchema}
                onSubmit={values => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 500);
                    console.log(values)
                    addNewMessage(values)

                }}
                render={({errors, touched}) => (
                    <Form>
                        <div className={s.dialogsItems}>
                            {dialogsElements}
                        </div>
                        <div className={s.messages}>
                            <div>
                                {messageElements}
                            </div>
                            <div className={s.textarea}>
                                <Field placeholder='Enter your message' name='newMessageBody' component='textarea' />
                                {errors.newMessageBody &&
                                touched.newMessageBody && <div className={styles.fieldError}>{errors.newMessageBody}</div>}
                            </div>
                            <div>
                                <button type='submit'>Send message</button>
                            </div>
                        </div>
                    </Form>
                )}
            />
        </div>
    )
}

export default Dialogs