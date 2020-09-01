import React from 'react';
import classes from './Myposts.module.css';
import Post from "./Post/Post";

type propsType={
    addPost:(newPost:string)=>void
    messageDataPosts:Array<profileType>

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
        props.addPost(newPostText.current?.value);
        newPostText.current.value=''
    }
}
    return (
        <span className={classes.span}>
          <div>
<textarea ref={newPostText}></textarea>
              <button onClick={addPostNow}>Add</button>
              <p></p>
              {props.messageDataPosts.map(m=><Post message={m.messages} lickeCount={m.lickeCount}/>)}

           </div>
        </span>
    )
}

export default Myposts;