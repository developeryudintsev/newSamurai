import React from 'react';
import { rerenderEntireTree} from "../Render";

type postType={
    id:number,
    messages:string,
    lickeCount:number
}
export type profilePageType={
    posts: Array<postType>
    newPostText:string
}
type messagesType={
    id:number,
    name:string
}
type dialogsType={
    id:number,
    name:string
}
type dialogsPageType={
    messages:Array<messagesType> ,
    dialogs:Array<dialogsType>,
    newMessageBody:string
}
export type stateType={
    profilePage:profilePageType,
    dialogsPage:dialogsPageType,
    sidebar:any
}
export let state:stateType= {
    profilePage: {
        posts: [
            {id:1,messages:'Hi,how are you',lickeCount:10000000000000000},
            {id:2,messages:"It's my first post",lickeCount: 99999999},
        ],
            newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        messages: [
            {id:1,name:'hi'},
            {id:2,name:'hihihihihihihihihihihihihihihihi!!!!!!!!!!!!!'},
            {id:3,name:'hi'}
        ],
            dialogs: [
                {id:1,name:'Dima'},
                {id:2,name:'Sasha'},
                {id:3,name:'Igor'}
        ],
            newMessageBody: ''
    },
    sidebar: {}
}
export let addPost=(postMessage:string)=>{
    let newPost:postType={
        id:5,
        messages:postMessage,
        lickeCount:99999999999999999999999999999999999999999999999999999
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state