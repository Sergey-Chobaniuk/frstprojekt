import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

const data ={
    posts: posts,
    dialogs: dialogs,
    messages: messages
}
export default data;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
