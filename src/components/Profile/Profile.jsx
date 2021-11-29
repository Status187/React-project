import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import backgroundMain from '../../image/background-main.jpg';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={backgroundMain} alt="background"></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;