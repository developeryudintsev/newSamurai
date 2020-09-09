import store from "./state";
import {ActionsType, stateType} from "./state";
import {rerenderEntireTree} from "../index";

export const addPost = 'ADD_POST';
export const updateNewPostText = 'UPDATE_NEW_POST_TEXT';

export const profileReducer=(state:stateType,action:ActionsType)=>{
    switch(action.type){
        case addPost:
        let newPost: any = {
            id: 5,
            messages: state.profilePage.newPostText,
            lickeCount: 99999999999999999999999999999999999999999999999999999
        }
        state.profilePage.posts.push(newPost)
        store._callSubsriber(state);
        return state

        case updateNewPostText:
        state.profilePage.newPostText = action.newText;
        rerenderEntireTree(state);
            return state
        default:
            return state
    }
    return state
}

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