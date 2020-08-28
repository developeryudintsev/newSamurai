import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route,BrowserRouter} from 'react-router-dom'
import {Body} from "./components/Body/Body";

type PropsType={
    messageData:Array<messageDataPost>
    messagesData:Array<dialogItemprops>
    dailogsData:Array<dailogsDataprops>

}
type dailogsDataprops={
    id:number,
    name:string
}
type dialogItemprops={
    id:number,
    name:string
}
type messageDataPost={
    id:number,
    messages:string,
    lickeCount:number
}
function App(props:PropsType) {

    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <Nav/>
            {/*<Profile/>*/}

            <div className={'App-wraper-content'}>
                <Route exact path={'/'} component={Body}/>
                <Route  path={'/profile'} render={()=><Profile messageData={props.messageData}/>}/>
                <Route path={'/dialogs'} render={()=><Dialogs messagesData={props.messagesData} dailogsData={props.dailogsData}/>}/>

            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;