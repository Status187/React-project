import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'active-link' : '';
const setColor = ({isActive}) => ({color: isActive ? 'black' : 'white'});

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" style={setColor} className={setActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" style={setColor} className={setActive}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" style={setColor} className={setActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" style={setColor} className={setActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" style={setColor} className={setActive}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;