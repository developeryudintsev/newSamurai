import React from 'react';
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {profilePageType} from "../../Redux/state";

type propsType={
    state:profilePageType
}

let Profile = (props:propsType) => {

    return (
        <span >

            <ProfileInfo/>
                <Myposts messageDataPosts={props.state.posts}/>
            </span>
    )
}

export default Profile;