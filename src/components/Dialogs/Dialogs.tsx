import React from "react";
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Post/Post";
import DialogsItemsdo from "./DilogItem/DialogsItem";

type MessageType={
    Message:string
}
let Message=(props:MessageType)=>{
    return(
        <div className={d.contentitem}>{props.Message}</div>
    )
}
type PropsType={
    messagesData:Array<dialogItemprops>
    dailogsData:Array<dailogsDataprops>
}
type dailogsDataprops={
    id:number,
    name:string
}
type dialogItemprops={
    id:number,
    name:string
}
function Dialogs(props:PropsType) {

    return (
        <div className={d.content}>
            <div className={''}>
               <DialogsItemsdo dailogsData={props.dailogsData}/>

            </div>
            <div className={d.messages}>
                {
                    props.messagesData.map(m=>
                    <div>
                        <Message Message={m.name}/>
                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default Dialogs;