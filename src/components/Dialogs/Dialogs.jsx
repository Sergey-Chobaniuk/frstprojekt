import React from "react";
import d from './Dialogs.module.css';
const Dialogs =(props) => {
    return (
    <div className={d.dialogs}>
        <div className={d.dialogItems}>
            <div className={d.dialog}>
                Dimych
            </div>
            <div className={d.dialog}>
                Vasia
            </div>
            <div className={d.dialog}>
                Pitia
            </div>
            <div className={d.dialog}>
                Anna
            </div>
            <div className={d.dialog}>
                Vika
            </div>
            <div className={d.dialog}>
                Lena
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