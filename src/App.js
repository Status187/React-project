import React from 'react';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper__content'>

                        <Route path='/dialogs'
                               render={ () => <DialogsContainer />}/>

                        <Route path='/profile'
                               render={ () => <ProfileContainer />}/>

                        <Route path='/users'
                               render={ () => <UsersContainer />}/>

                        <Route path='/news'
                               render={ () => <News />}/>
                        <Route path='/music'
                               render={ () => <Music />}/>
                        <Route path='/settings'
                               render={ () => <Settings />}/>
                        <Route path='/settings'
                               render={ () => <Friends />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;