import React from "react";
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Post/Post";
type PropsType={
    id:number,
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
    let dailogsData=[
        {id:1,name:'Dima'},
        {id:2,name:'Sasha'},
        {id:3,name:'Igor'}
        ]
    let messageData=[
        {id:1,name:'hi'},
        {id:2,name:'hihihihihihihihihihihihihihihihi!!!!!!!!!!!!!'},
        {id:3,name:'hi'}
    ]
    return (
        <div className={d.content}>
            <div className={''}>
                {
                    dailogsData.map(m=>
                        <div>
                            <DialogItem id={m.id} classname={m.name}/>
                        </div>
                        )
                }

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