import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
let Nav=()=>{
    return(
        <nav className={classes.nav}>
            <div className={classes.item1234}><NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink></div>
            <div className={classes.item1234}><NavLink to='/dialogs' activeClassName={classes.active}>Dialog</NavLink></div>
            <div className={classes.item1234}><a >New</a></div>
            <div className={classes.item1234}><a >Music</a></div>
        </nav>
    )
}

export default Nav;