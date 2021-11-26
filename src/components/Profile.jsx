import React from 'react';
import backgroundMain from '../image/background-main.jpg';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src={backgroundMain} alt="background"></img>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div>
                    posts 1
                </div>
                <div>
                    posts 2
                </div>
            </div>
        </div>
    )
}

export default Profile;