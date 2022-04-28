let renderEntireTree = () =>{};
/*
let cubscribe = (observer) => {
    renderEntireTree=observer;
}
let posts = [
    {id:1, message: 'Hi, how are you?', likesCount: 12},
    {id:2, message: 'It\'s my first post', likesCount: 25},
    {id:3, message: 'how are you', likesCount: 1},
    {id:4, message: 'a', likesCount: 12},
    {id:5, message: 'awffaffff', likesCount: 122},
    {id:6, message: 'ttttttttttttttttttt', likesCount: 112},
]
let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Vasia'},
    {id: 3, name: 'Pitia'},
    {id: 4, name: 'Anna'},
    {id: 5, name: 'Vika'},
    {id: 6, name: 'Lena'},
]
let messages = [
    {id: 1, message: 'Haw a you?'},
    {id: 2, message: 'I say to you'},
    {id: 3, message: 'My name is'},
    {id: 4, message: 'Haw do you do?'},
    {id: 5, message: 'What?'},
]
 let addPost = (newPostMessage) => {
    let newPost = {
        id: 6,
        message: newPostMessage,
        likesCount: 0
    };
    posts.push(newPost);
     data.profilePage.newPostText='';
    /!*alert(newPost.message);*!/
     renderEntireTree();
}
let addMessage = (newDialogMessage) => {
    let newMessage = {
        id: 6,
        message: newDialogMessage,
    };
    messages.push(newMessage);
    data.dialogsPage.newDialogText='';
    renderEntireTree();
}
let newOnCheingePostText = (newText) =>{
    data.profilePage.newPostText=newText;
    renderEntireTree();
}
let newOnCheingeDialogText = (newText) =>{
    data.dialogsPage.newDialogText=newText;
    renderEntireTree();
}

const data = {

    profilePage: {
        posts: posts,
        addPost,
        newOnCheingePostText,
        newPostText: ''
    },
    dialogsPage: {
        dialogs: dialogs,
        messages: messages,
        addMessage,
        newOnCheingeDialogText,
        newDialogText: ''
    },
    cubscribe
}
export {data};
*/
const ADD_POST = 'addPost';
const NEW_ON_CHEINGE_POST_TEXT = 'newOnCheingePostText';
const ADD_MESSAGE = 'addMessage';
const NEW_ON_CHEINGE_DIALOG_TEXT = 'newOnCheingeDialogText';
export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 25},
                {id: 3, message: 'how are you', likesCount: 1},
                {id: 4, message: 'a', likesCount: 12},
                {id: 5, message: 'awffaffff', likesCount: 122},
                {id: 6, message: 'ttttttttttttttttttt', likesCount: 112},
            ],
            newOnCheingePostText(newText) {
                store._state.profilePage.newPostText = newText;
                store._renderEntireTree();
                /*alert(newText);*/
            },
            /*addPost(newPostMessage) {*/
            addPost() {
                debugger;
                let newPost = {
                    id: 6,
                    message: this.newPostText,
                    likesCount: 0
                };
                store._state.profilePage.posts.push(newPost);
                store._state.profilePage.newPostText = '';
                /*alert(newPost.message);*/
                store._renderEntireTree();
            },
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Vasia'},
                {id: 3, name: 'Pitia'},
                {id: 4, name: 'Anna'},
                {id: 5, name: 'Vika'},
                {id: 6, name: 'Lena'},
            ],
            messages: [
                {id: 1, message: 'Haw a you?'},
                {id: 2, message: 'I say to you'},
                {id: 3, message: 'My name is'},
                {id: 4, message: 'Haw do you do?'},
                {id: 5, message: 'What?'},
            ],
            newOnCheingeDialogText(newText) {
                store._state.dialogsPage.newDialogText = newText;
                store._renderEntireTree();
                /*alert(newText);*/
            },
            addMessage() {
                let newMessage = {
                    id: 6,
                    message: this.newDialogText,
                };
                store._state.dialogsPage.messages.push(newMessage);
                store._state.dialogsPage.newDialogText = '';
                store._renderEntireTree();
            },
            newDialogText: ''
        },
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if(action.type === ADD_POST) store._state.profilePage.addPost();
        else if(action.type === NEW_ON_CHEINGE_POST_TEXT) store._state.profilePage.newOnCheingePostText(action.newText);
        else if(action.type === ADD_MESSAGE) store._state.dialogsPage.addMessage(action.newDialogMessage);
        else if(action.type === NEW_ON_CHEINGE_DIALOG_TEXT) store._state.dialogsPage.newOnCheingeDialogText(action.newText);
    },

    _renderEntireTree() {},
    subscribe(observer) {
        store._renderEntireTree = observer;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: NEW_ON_CHEINGE_POST_TEXT,newText: text });
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const newOnCheingeDialogTextActionCreator = (text) => ({type: NEW_ON_CHEINGE_DIALOG_TEXT,newText: text });