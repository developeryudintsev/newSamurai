import state, {stateType} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {addPost, stateType} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/state";

type PropsType={
    state?:any
}
export let rerenderEntireTree=(state:stateType)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} updateNewtext={store.updateNewtext.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store._state)
store.subscribe(store._callSubsriber)