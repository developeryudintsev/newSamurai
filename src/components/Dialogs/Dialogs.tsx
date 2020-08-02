import React from "react";
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

function Dialogs() {
    return (
        <div className={d.content}>
            <div className={''}>
                <div className={d.contentitem}><NavLink to={'/dialogs/1'}>Sasha</NavLink></div>
                <div className={d.contentitem}><NavLink to={'/dialogs/2'}>Dimych</NavLink></div>
                <div className={d.contentitem}><NavLink to={'/dialogs/3'}>Igor</NavLink></div>
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