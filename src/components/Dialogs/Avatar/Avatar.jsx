import React from 'react';
import s from './../Dialogs.module.css';
import ava_2 from '../../../image/ava_1.webp';

const Avatar = (props) => {
    return (
        <div className={s.avatar}>
            <img className={s.avatar} src={ava_2} alt='avatar'/>
        </div>
    )
}

export default Avatar;