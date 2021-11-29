import React from 'react';
import c from './NavBar.module.css';

const Nav = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <a>Profile</a>
            </div>
            <div className={c.item}>
                <a>Messages</a>
            </div>
            <div className={c.item}>
                <a>News</a>
            </div>
            <div className={c.item}>
                <a>Music</a>
            </div>
            <div className={c.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Nav;