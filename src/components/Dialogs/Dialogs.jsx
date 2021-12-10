import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {setActive} from "../NavBar/NavBar";

const setColor = ({isActive}) => ({color: isActive ? 'white' : 'black'});

const DialogItem = (props) => {
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <NavLink to={"/dialogs/1" + props.id} style={setColor} className={setActive}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Maksim" id="1" />
                <DialogItem name="Sasha" id="2" />
                <DialogItem name="Artem" id="3" />
                <DialogItem name="Sveta" id="4" />
                <DialogItem name="Mishael" id="5" />
                <DialogItem name="Kate" id="6" />
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"i fine"}/>
                <Message message={"and you?"}/>
            </div>
        </div>
    )
}

export default Dialogs