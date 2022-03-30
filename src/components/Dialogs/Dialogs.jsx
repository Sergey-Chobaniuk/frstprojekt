import React from "react";
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";
import data from './../../index.js';

const Dialogs = () => {

    let dialogElements = data.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = data.messages.map(m => <Message message={m.message}/>);

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