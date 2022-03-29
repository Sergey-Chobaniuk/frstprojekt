import React from "react";
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={d.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={d.message}>
            {props.message}
        </div>
    )
}
const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Vasia'},
        {id: 3, name: 'Pitia'},
        {id: 4, name: 'Anna'},
        {id: 5, name: 'Vika'},
        {id: 6, name: 'Lena'},
    ]
    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = [
        {id: 1, message: 'Haw a you?'},
        {id: 2, message: 'I say to you'},
        {id: 3, message: 'My name is'},
        {id: 4, message: 'Haw do you do?'},
        {id: 5, message: 'What?'},
    ]
    let messageElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                {dialogElements}
            </div>
            <div className={d.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;