import React from 'react';
import './App.css';
import Header from "./components/Header/Herader";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className="App">
            <Header/>
            <Nav/>
            {/*<Profile/>*/}
            <div className={'App-wraper-content'}>
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;