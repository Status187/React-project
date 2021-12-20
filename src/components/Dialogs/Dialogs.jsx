import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Avatar from './Avatar/Avatar';

const Dialogs = (props) => {

    let avatarElements =
        props.state.avatar.map( a => <Avatar url={a.src} />);

    let dialogsElements =
        props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements =
        props.state.messages.map( m => <Message message={m.message} />);

    let newSubmitElement = React.createRef();

    let addPost = () => {
        let text = newSubmitElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.avatarItems}>
                { avatarElements }
            </div>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div>
                <textarea className={s.textarea} ref={newSubmitElement}></textarea>
                <button onClick={ addPost }>submit</button>
            </div>
        </div>
    )
}

export default Dialogs;