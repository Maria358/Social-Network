import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as React from "react";



const Dialogs = (props) => {

    let state = props.messagePage

    let dialogsElements = state.dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.message.map(m => <Message text={m.text}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
       props.newMessageChange(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               <div>
                   {messageElements}
               </div>
            <div className={s.textarea}>
                <textarea onChange={onNewMessageChange}
                          placeholder='Enter your message'
                          value = {newMessageBody}/>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send message</button>
            </div>
                </div>

        </div>
    )
}

export default Dialogs