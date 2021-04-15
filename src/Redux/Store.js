import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            post: [{id: 1, message: 'I am mine before i am ever anyone else\'s', likeCount: '377'},
                {id: 2, message: 'Thank yourself for how far you\'ve come. It hasn\'t easy', likeCount: '526'},
                {id: 3, message: 'Feel your feelings', likeCount: '930'},
                {id: 4, message: 'Faking a smile is easier than explaining why you\'re sad', likeCount: '207'},
                {id: 5, message: 'Your future needs you, your past doesn\'t', likeCount: '120'}],
            newPostText: ''
        },
        messagePage: {
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
        },
        sidebarPage:{}
    },

    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('State was changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._rerenderEntireTree(this._state)
    }
}

export default store