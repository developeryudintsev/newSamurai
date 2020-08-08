import React from 'react';
import classes from './Profile.module.css';
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

let Profile = () => {
    return (
        <span >

            <ProfileInfo/>

                <Myposts/>
            </span>
    )
}

export default Profile;