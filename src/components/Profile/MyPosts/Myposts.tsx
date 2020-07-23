import React from 'react';
import classes from './Myposts.module.css';
import Post from "./Post/Post";

let Myposts = () => {
    return (
        <span className={classes.span}>
          <div>
<textarea></textarea>
              <Post message={'Hi,how are you'}/>
              <Post message={"It's my first post"}/>
           </div>
        </span>
    )
}

export default Myposts;