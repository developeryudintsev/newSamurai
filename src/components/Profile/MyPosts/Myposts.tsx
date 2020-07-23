import React from 'react';
import classes from './Myposts.module.css';
import Post from "./Post/Post";

let Myposts = () => {
    return (
        <span className={classes.span}>
          <div>
<textarea></textarea>
              <Post/>
           </div>
        </span>
    )
}

export default Myposts;