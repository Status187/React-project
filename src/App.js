import React from 'react';
import NavBar from './components/NavBar/NavBar';
import {Route} from "react-router-dom";
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = () => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper__content'>

                        <Route path='/dialogs'
                               render={ () => <DialogsContainer />}/>

                        <Route path='/profile/:userId?'
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
    );
}

export default App;