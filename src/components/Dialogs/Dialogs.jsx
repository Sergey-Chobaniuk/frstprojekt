import React from "react";
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
const Dialogs =(props) => {
    return (
    <div className={d.dialogs}>
        <div className={d.dialogItems}>
            <div className={d.dialog}>
                <NavLink to={'/dialogs/1'}>Dimich</NavLink>
            </div>
            <div className={d.dialog}>
                <NavLink to={'/dialogs/2'}>Vasia</NavLink>
            </div>
            <div className={d.dialog}>
                <NavLink to={'/dialogs/3'}>Pitia</NavLink>
            </div>
            <div className={d.dialog}>
                <NavLink to={'/dialogs/4'}>Anna</NavLink>
            </div>
            <div className={d.dialog}>
                <NavLink to={'/dialogs/5'}>Vika</NavLink>
            </div>
            <div className={d.dialog}>
                <NavLink to={'/dialogs/6'}>Lena</NavLink>
            </div>
        </div>
        <div className={d.messages}>
            <div className={d.message}>
                Haw a you?
            </div>
            <div className={d.message}>
                I say to you
            </div>
            <div className={d.message}>
                My name is Dimych
            </div>
        </div>
    </div>

    )

}
export default Dialogs;