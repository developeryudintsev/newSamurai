import React from 'react';
import classes from './Profile.module.css';

let Profile = () => {
    return (
        <span className={classes.span}>
            <img
                src={'https://www.updatetvandstereo.com/wp-content/uploads/2016/12/bora-bora-french-polynesia-sunset-ocean.jpg'}/>
        <div>
            <p className={'item'}>ava+description</p>
            <p className={'item'}> my post</p>
            <p className={'item'}> my post2</p>
            <p className={'item'}> my post3</p>
        </div>
            </span>
    )
}

export default Profile;