import {renderEntireTree} from "../index";

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
    alert(newPost.message);
     renderEntireTree();
}
let addMessage = (newDialogMessage) => {
    let newMessage = {
        id: 6,
        message: newDialogMessage,
    };
    messages.push(newMessage);
    alert(newMessage.message);
    renderEntireTree();
}
const data = {

    profilePage: {
        posts: posts,
        addPost
    },
    dialogsPage: {
        dialogs: dialogs,
        messages: messages,
        addMessage
    }

}

export {data};
