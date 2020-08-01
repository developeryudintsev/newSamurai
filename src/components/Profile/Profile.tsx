import React from 'react';
import classes from './Profile.module.css';
import Myposts from "./MyPosts/Myposts";

let Profile = () => {
    return (
        <span className={classes.span}>

       <div className={'item'}>ava+description</div>
                <Myposts/>
            </span>
    )
}

export default Profile;