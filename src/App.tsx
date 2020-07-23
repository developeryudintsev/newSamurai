import React from 'react';
import './App.css';
import Header from "./components/Header/Herader";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Header/>
            <Nav/>
            <Profile/>

        </div>
    );
}

export default App;