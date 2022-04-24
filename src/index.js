import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {data} from "./State/state";
import {store} from "./State/state";

//data.profilePage.addPost('Atas');
let renderEntireTree=() => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={store}  />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
renderEntireTree();
store.subscribe(renderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
