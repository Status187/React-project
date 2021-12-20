import React from 'react';
import s from './../Dialogs.module.css';
import ava_1 from '../../../image/ava_1.webp';
import ava_2 from '../../../image/ava_2.webp';

const Avatar = (props) => {
    return (
        <div className={s.avatar}>{props.avatar}
            <img className={s.avatar} src={ava_2} alt='avatar'></img>
        </div>
    )
}

export default Avatar;