import * as React from "react";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return{
        messagePage: state.messagePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: () => {
            dispatch(sendMessageActionCreator())

        },
        newMessageChange: (body) => {
            dispatch(updateNewMessageActionCreator(body))
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)