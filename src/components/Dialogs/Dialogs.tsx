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
function Dialogs() {
    let messageData=[
        {id:1,name:'hi'},
        {id:2,name:'hihihihihihihihihihihihihihihihi!!!!!!!!!!!!!'},
        {id:3,name:'hi'}
    ]
    return (
        <div className={d.content}>
            <div className={''}>
               <DialogsItemsdo/>

            </div>
            <div className={d.messages}>
                {
                    messageData.map(m=>
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