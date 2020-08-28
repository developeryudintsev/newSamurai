import React from 'react';
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

type propsType={
    messageData:Array<messageDataPost>
}
type messageDataPost={
    id:number,
    messages:string,
    lickeCount:number
}
let Profile = (props:propsType) => {

    return (
        <span >

            <ProfileInfo/>
                <Myposts messageDataPosts={props.messageData}/>
            </span>
    )
}

export default Profile;