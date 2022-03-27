import React from "react";
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
const DialogItem =(props)=> {
    let path = "/dialogs/"+props.id;
    return(
        <div className={d.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message =(props)=>{
    return(
        <div className={d.message}>
            {props.message}
        </div>
    )
}
const Dialogs =(props) => {
    return (
    <div className={d.dialogs}>
        <div className={d.dialogItems}>
            <DialogItem name={"Dimych"} id={"1"} />
            <DialogItem name={"Vasia"} id={"2"} />
            <DialogItem name={"Pitia"} id={"3"} />
            <DialogItem name={"Anna"} id={"4"} />
            <DialogItem name={"Vika"} id={"5"} />
            <DialogItem name={"Lena"} id={"6"} />
        </div>
        <div className={d.messages}>
            <Message message={"Haw a you?"} />
            <Message message={"I say to you"} />
            <Message message={"My name is"} />
            <Message message={"Haw do you do?"} />
            <Message message={"What?"} />
        </div>
    </div>
    )
}
export default Dialogs;