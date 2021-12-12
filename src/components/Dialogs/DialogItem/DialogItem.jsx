import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'active-link' : '';

const setColor = ({isActive}) => ({color: isActive ? 'white' : 'black'});

const DialogItem = (props) => {
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <NavLink to={"/dialogs/1" + props.id} style={setColor} className={setActive}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem