import React from 'react';
import classes from './Myposts.module.css';
import Post from "./Post/Post";

type propsType={
    messageDataPosts:Array<profileType>
}
type profileType={
    id:number,
    messages:string
    lickeCount:number
}

let Myposts = (props:propsType) => {

    return (
        <span className={classes.span}>
          <div>
<textarea></textarea>
              <button>Add</button>
              <p></p>
              {props.messageDataPosts.map(m=><Post message={m.messages} lickeCount={m.lickeCount}/>)}

           </div>
        </span>
    )
}

export default Myposts;