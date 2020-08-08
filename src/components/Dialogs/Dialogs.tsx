import React from "react";
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
type PropsType={
    id:string,
    classname:string
}
let DialogItem=(props:PropsType)=>{
    let path='/dialogs/'+props.id;
    return(
        <div className={d.contentitem+''+d.active}>
            <NavLink to={path}>{props.classname}</NavLink>
        </div>
    )
}

type MessageType={
    Message:string
}

let Message=(props:MessageType)=>{
    return(
        <div className={d.contentitem}>{props.Message}</div>
    )
}

function Dialogs() {
    return (
        <div className={d.content}>
            <div className={''}>
                <div className={d.contentitem}><Message Message={'Hi'}/></div>
                <div className={d.contentitem}><Message Message={'Hi'}/></div>
                <div className={d.contentitem}><Message Message={'Hi'}/></div>
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