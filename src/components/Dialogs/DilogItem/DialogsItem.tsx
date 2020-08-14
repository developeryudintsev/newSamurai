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


function DialogsItemsdo() {
    let dailogsData=[
        {id:1,name:'Dima'},
        {id:2,name:'Sasha'},
        {id:3,name:'Igor'}
        ]

    return (
            <div className={''}>
                {
                    dailogsData.map(m=>
                        <div>
                            <DialogsItems id={m.id} classname={m.name}/>
                        </div>
                        )
                }
        </div>
    );
}

export default DialogsItemsdo;