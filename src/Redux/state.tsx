import React from 'react';
import {rerenderEntireTree} from "../index";


type postType = {
    id: number,
    messages: string,
    lickeCount: number
}
export type profilePageType = {
    posts: Array<postType>
    newPostText: string
}
type messagesType = {
    id: number,
    name: string
}
type dialogsType = {
    id: number,
    name: string
}
type dialogsPageType = {
    messages: Array<messagesType>,
    dialogs: Array<dialogsType>,
    newMessageBody: string
}
export type stateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType,
    sidebar: any
}

export type storeType = {
    _state: stateType;
    getState: () => void
    _callSubsriber: (state: stateType) => void
    // addPost:(postMessage:string)=>void
    // updateNewtext:(newText:string)=>void
    subscribe: (observer: any) => void
    dispatch: (action: ActionsType) => void
}


export const addPost = 'ADD_POST';
export const updateNewPostText = 'UPDATE_NEW_POST_TEXT';
export const addPostActionCreator = () => {
    return {
        type: addPost
    }as const//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
export const updateNewPostActionCreator = (text: string) => {

    return {
        type: updateNewPostText,
        newText: text
    }as const//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
type addPostActionCreatorType=ReturnType <typeof addPostActionCreator>
type updateNewPostActionCreatorType=ReturnType <typeof updateNewPostActionCreator>

export type ActionsType = addPostActionCreatorType | updateNewPostActionCreatorType

// export type ActionType=any;
let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messages: 'Hi,how are you', lickeCount: 10000000000000000},
                {id: 2, messages: "It's my first post", lickeCount: 99999999},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, name: 'hi'},
                {id: 2, name: 'hihihihihihihihihihihihihihihihi!!!!!!!!!!!!!'},
                {id: 3, name: 'hi'}
            ],
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Igor'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubsriber(state: stateType) {
    },
    subscribe(observer: any) {
        this._callSubsriber = observer;
    },
    // addPost(postMessage:string){
    //     let newPost:postType={
    //         id:5,
    //         messages:postMessage,
    //         lickeCount:99999999999999999999999999999999999999999999999999999
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._callSubsriber(this._state)
    // },
    //  updateNewtext(newText:string){
    //     this._state.profilePage.newPostText=newText
    //     rerenderEntireTree(this._state)
    // },
    dispatch(action: ActionsType) {
        if (action.type === 'ADD_POST') {
            let newPost: any = {
                id: 5,
                messages: this._state.profilePage.newPostText,
                lickeCount: 99999999999999999999999999999999999999999999999999999
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubsriber(this._state)
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText
            rerenderEntireTree(this._state)
        }
    }
}
// type eaddPostActionCreatorType=Return
// export let addPostActionCreator=()=>{
//     return{type:'ADD_POST'}
// }
//
// export let updatenewTextActionCreator=(text:string)=>{
//     return{type:'UPDATE_NEW_POST_TEXT', newText:text}
// }

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