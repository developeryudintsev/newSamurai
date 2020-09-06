import React from 'react';
import classes from './Myposts.module.css';
import Post from "./Post/Post";
import {ActionsType, addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/state";

type propsType={
    messageDataPosts:Array<profileType>
    messageDataPostsText:string
    dispatch:(action:ActionsType)=>void
}
type profileType={
    id:number,
    messages:string
    lickeCount:number
}

let Myposts = (props:propsType) => {
    let newPostText=React.createRef<HTMLTextAreaElement>();
let addPostNow=()=> {
    if (newPostText.current?.value) {
        props.dispatch(addPostActionCreator());
        newPostText.current.value=''
    }
}
let onChange=()=>{
    if (newPostText.current?.value) {
        let text = newPostText.current.value;
        // let updateNewPostActionCreator={ type: 'UPDATE_NEW_POST_TEXT', newText: text };
        let action=updateNewPostActionCreator(text)
        props.dispatch(action);
    }
}
    return (
        <span className={classes.span}>
          <div>
<textarea ref={newPostText} onChange={onChange} value={props.messageDataPostsText}></textarea>
              <button onClick={addPostNow}>Add</button>
              <p></p>
              {props.messageDataPosts.map(m=><Post message={m.messages} lickeCount={m.lickeCount}/>)}

           </div>
        </span>
    )
}

export default Myposts;