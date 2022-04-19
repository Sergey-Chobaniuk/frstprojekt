import React from "react";
import d from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";



const Dialogs = (props) => {
    let dialogElements = props.dialogsData.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.dialogsData.messages.map(m => <Message message={m.message}/>);
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let textNewMessage = newMessageElement.current.value;
        props.dialogsData.addMessage(textNewMessage);
        newMessageElement.current.value = '';
    }
    let newOnCheingeDialogText = () => {
        let newDialogText = newMessageElement.current.value;
        props.dialogsData.newOnCheingeDialogText(newDialogText);

    }
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
                    <textarea onChange={newOnCheingeDialogText} value={props.dialogsData.newDialogText} ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;