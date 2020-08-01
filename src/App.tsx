import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route,BrowserRouter} from 'react-router-dom'
import {Body} from "./components/Body/Body";

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <Nav/>
            {/*<Profile/>*/}

            <div className={'App-wraper-content'}>
                <Route exact path={'/'} component={Body}/>
                <Route  path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Dialogs}/>

            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;