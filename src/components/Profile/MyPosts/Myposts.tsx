import React from 'react';
import classes from './Myposts.module.css';
import Post from "./Post/Post";

let Myposts = () => {
    let messageData=[
        {id:1,messages:'Hi,how are you',lickeCount:10000000000000000},
        {id:2,messages:"It's my first post",lickeCount: 99999999},
    ]
    return (
        <span className={classes.span}>
          <div>
<textarea></textarea>
              <button>Add</button>
              <p></p>
              {messageData.map(m=><Post message={m.messages}lickeCount={m.lickeCount}/>)}
           </div>
        </span>
    )
}

export default Myposts;