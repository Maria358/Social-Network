let SEND_MESSAGE = 'SEND-MESSAGE'
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    message: [{id: '1', text: 'You are made of magic'},
        {id: '2', text: 'You are the sun\''},
        {id: '3', text: 'Be the best version of you'},
        {id: '4', text: 'Dear, sometimes people come into your life just to teach you how to let go'},
        {id: '5', text: 'Remember who you are'},
        {id: '6', text: 'I hope you`re well'}],
    dialog: [{id: '1', name: 'Victor'},
    {id: '2', name: 'Dmitriy'},
    {id: '3', name: 'Alexandra'},
    {id: '4', name: 'Maria'},
    {id: '5', name: 'Valeriy'},
    {id: '6', name: 'Andrew'}],
    newMessageBody: ''

}

const dialogsReducer = (state = initialState, action) => {

// так как мы диалоги и сообщения не изменяем, необходимость их глубокого копирования исчезает

    switch (action.type) {
        case SEND_MESSAGE:
            let message = state.newMessageBody
            return{
                ...state,
                message: [...state.message,{id: 7, text: message}],
                newMessageBody: ''
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageBody: action.message
            }
        default:
            return state
    }
}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        message: message
    }
}
export default dialogsReducer