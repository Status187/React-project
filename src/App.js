import React from 'react';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper__content'>

                    <Routes>
                        <Route path='/dialogs'
                               element={<DialogsContainer store={props.store} />}/>
                        <Route path='/profile'
                               element={<Profile store={props.store} />}/>
                        <Route path='/news'
                               element={<News />}/>
                        <Route path='/music'
                               element={<Music />}/>
                        <Route path='/settings'
                               element={<Settings />}/>
                        <Route path='/settings'
                               element={<Friends />}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;