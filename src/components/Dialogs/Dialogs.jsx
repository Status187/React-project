import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const setColor = ({isActive}) => ({color: isActive ? 'white' : 'black'});

let dialogs = [
    {id: 1, name: 'Maksim'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Artem'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Mishael'},
    {id: 6, name: 'Kate'},
];

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 1, message: 'How are you?'},
    {id: 1, message: 'i fine'},
    {id: 1, message: 'and you?'},
    {id: 1, message: 'too'},
    {id: 1, message: 'I see'},
];

let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />)

let messagesElements = messages.map( m => <Message message={m.message} />)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs