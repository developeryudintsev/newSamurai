import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route,BrowserRouter} from 'react-router-dom'
import {Body} from "./components/Body/Body";
import {addPost, stateType, updateNewtext} from "./Redux/state";

type PropsType={
state:stateType
    addPost:(newPost:string)=>void
}

function App(props:PropsType) {

    return (
        <div className="App">
            <Header/>
            <Nav/>
            {/*<Profile/>*/}

            <div className={'App-wraper-content'}>
                <Route exact path={'/'} component={Body}/>
                <Route  path={'/profile'} render={()=><Profile updateNewtext={updateNewtext} addPost={props.addPost} state={props.state.profilePage}/>}/>
                <Route path={'/dialogs'} render={()=><Dialogs messagesData={props.state.dialogsPage.messages} dailogsData={props.state.dialogsPage.dialogs}/>}/>

            </div>
        </div>
    );
}
export default App;