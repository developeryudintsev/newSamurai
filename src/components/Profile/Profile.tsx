import React from 'react';
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
// import {profilePageType} from "../../Redux/state";

type propsType={
    state:any,
    dispatch:(action:{type:string,newText:string})=>void

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