import React from 'react';
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {profilePageType, updateNewtext} from "../../Redux/state";

type propsType={
    state:profilePageType,
    addPost:(newPost:string)=>void
    updateNewtext:(newText:string)=>void;
}

let Profile = (props:propsType) => {

    return (
        <span >

            <ProfileInfo/>
                <Myposts updateNewtext={updateNewtext} addPost={props.addPost} messageDataPosts={props.state.posts} messageDataPostsText={props.state.newPostText}/>
            </span>
    )
}

export default Profile;