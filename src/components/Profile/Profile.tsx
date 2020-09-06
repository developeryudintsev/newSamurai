import React from 'react';
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionsType} from "../../Redux/state";
// import {profilePageType} from "../../Redux/state";

type propsType={
    state:any,
    dispatch:(action:ActionsType)=>void

}

let Profile = (props:propsType) => {

    return (
        <span >

            <ProfileInfo/>
                <Myposts
                    dispatch={props.dispatch}
                    messageDataPosts={props.state.posts} messageDataPostsText={props.state.newPostText}/>
            </span>
    )
}

export default Profile;