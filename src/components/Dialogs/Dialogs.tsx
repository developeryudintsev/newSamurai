import React from "react";
import d from './Dialogs.module.css';

function Dialogs() {
    return (
        <div className={d.content}>
            <div className={d.content}>
                <div className={d.contentitem}>Sasha</div>
                <div className={d.contentitem}>Dimych</div>
                <div className={d.contentitem}>Igor</div>
            </div>
            <div className={d.messages}>
                <div className={d.messagesmessage}>Hi</div>
                <div className={d.messagesmessage}>Hi</div>
                <div className={d.messagesmessage} >Hi</div>
            </div>
        </div>
    );
}

export default Dialogs;