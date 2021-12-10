import React from 'react';
import s from './ProfileInfo.module.css';
import avatar from '../../../image/ava-mask.png';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={avatar} alt='avatar'></img>
            </div>
            <div>
                ava + description!!
            </div>
        </div>
    )
}

export default ProfileInfo;