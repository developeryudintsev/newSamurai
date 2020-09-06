import React from 'react';
import classes from './Myposts.module.css';
import Post from "./Post/Post";

type propsType={
    messageDataPosts:Array<profileType>
    messageDataPostsText:string
    dispatch:(action:{type:string,newText:string})=>void
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
        props.dispatch({type:'ADD_POST',newText:'s'});
        newPostText.current.value=''
    }
}
let onChange=()=>{
    if (newPostText.current?.value) {
        let text = newPostText.current.value;
        props.dispatch({type:'UPDATE_NEW_POST_TEXT',newText:text});
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