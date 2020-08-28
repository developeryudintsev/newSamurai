import React from "react";
import d from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";
type PropsType={
    id:number,
    classname:string
}
let DialogsItems=(props:PropsType)=>{
    let path='/dialogs/'+props.id;
    return(
        <div className={d.contentitem+''+d.active}>
            <NavLink to={path}>{props.classname}</NavLink>
        </div>
    )
}

type PropsTypeD={
    dailogsData:Array<dailogsDataprops>
}
type dailogsDataprops={
    id:number,
    name:string
}
function DialogsItemsdo(props:PropsTypeD) {


    return (
            <div className={''}>
                {
                    props.dailogsData.map(m=>
                        <div>
                            <DialogsItems id={m.id} classname={m.name}/>
                        </div>
                        )
                }
        </div>
    );
}

export default DialogsItemsdo;