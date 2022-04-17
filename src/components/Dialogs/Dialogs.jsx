import React from "react";
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

let newMessageElement = React.createRef();
let addMessage = () => {
    let textNewMessage = newMessageElement.current.value;
    alert(textNewMessage);
}

const Dialogs = (props) => {
    let dialogElements = props.dialogsData.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.dialogsData.messages.map(m => <Message message={m.message}/>);
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                {dialogElements}
            </div>
            <div className={d.messages}>
                {messageElements}
            </div>
            <div className={d.addMessage}>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;