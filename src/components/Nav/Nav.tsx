import React from 'react';
import classes from './Nav.module.css';
let Nav=()=>{
    return(
        <nav className={classes.nav}>
            <div className={classes.item1234}><a>Profile</a></div>
            <div className={classes.item1234}><a>Messages</a></div>
            <div className={classes.item1234}><a>New</a></div>
            <div className={classes.item1234}><a>Music</a></div>
        </nav>
    )
}

export default Nav;