import React from 'react';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Content from './components/Profile/Profile'
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { render } from "react-dom";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import c from "./components/NavBar/NavBar.module.css";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper__content'>

                    <Routes>
                        <Route path='/dialogs' element={<Dialogs />}/>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/music' element={<Music />}/>
                        <Route path='/settings' element={<Settings />}/>
                        {/*<Route path='*' element={<Error />}/>*/}
                    </Routes>

                </div>
                {/*<Content/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;