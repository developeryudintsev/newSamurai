import React from 'react';
import {rerenderEntireTree} from "../index";


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

export type storeType={
    _state:stateType;
    getState:()=>void
    _callSubsriber:(state:stateType)=>void
    addPost:(postMessage:string)=>void
    updateNewtext:(newText:string)=>void
    subscribe:(observer:any)=>void
}

let store:storeType={
    _state: {
        profilePage: {
            posts: [
                {id:1,messages:'Hi,how are you',lickeCount:10000000000000000},
                {id:2,messages:"It's my first post",lickeCount: 99999999},
            ],
            newPostText: ''
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
    },
    getState(){
        return this._state
    },
    _callSubsriber(state:stateType){
    },
    addPost(postMessage:string){
        let newPost:postType={
            id:5,
            messages:postMessage,
            lickeCount:99999999999999999999999999999999999999999999999999999
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubsriber(this._state)
    },
     updateNewtext(newText:string){
        this._state.profilePage.newPostText=newText
        rerenderEntireTree(this._state)
    },
    subscribe(observer:any){
        this._callSubsriber=observer;
    }
}


export default store
//======================================================================
// import React from 'react';
// import {rerenderEntireTree} from "../index";
//
// let rerenderEntaredTree=()=>{
//
// }
//
// type postType={
//     id:number,
//     messages:string,
//     lickeCount:number
// }
// export type profilePageType={
//     posts: Array<postType>
//     newPostText:string
// }
// type messagesType={
//     id:number,
//     name:string
// }
// type dialogsType={
//     id:number,
//     name:string
// }
// type dialogsPageType={
//     messages:Array<messagesType> ,
//     dialogs:Array<dialogsType>,
//     newMessageBody:string
// }
// export type stateType={
//     profilePage:profilePageType,
//     dialogsPage:dialogsPageType,
//     sidebar:any
// }
// export let state:stateType= {
//     profilePage: {
//         posts: [
//             {id:1,messages:'Hi,how are you',lickeCount:10000000000000000},
//             {id:2,messages:"It's my first post",lickeCount: 99999999},
//         ],
//             newPostText: 'it-kamasutra.com'
//     },
//     dialogsPage: {
//         messages: [
//             {id:1,name:'hi'},
//             {id:2,name:'hihihihihihihihihihihihihihihihi!!!!!!!!!!!!!'},
//             {id:3,name:'hi'}
//         ],
//             dialogs: [
//                 {id:1,name:'Dima'},
//                 {id:2,name:'Sasha'},
//                 {id:3,name:'Igor'}
//         ],
//             newMessageBody: ''
//     },
//     sidebar: {}
// }
// export let addPost=(postMessage:string)=>{
//     let newPost:postType={
//         id:5,
//         messages:postMessage,
//         lickeCount:99999999999999999999999999999999999999999999999999999
//     }
//     state.profilePage.posts.push(newPost)
//     rerenderEntireTree(state)
// }
// export let updateNewtext=(newText:string)=>{
//     state.profilePage.newPostText=newText
//     rerenderEntireTree(state)
// }
// export const subscribe=(observer:any)=>{
//     rerenderEntaredTree=observer;
// }
//
//
// export default state