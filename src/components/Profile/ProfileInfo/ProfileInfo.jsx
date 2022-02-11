import React from 'react';
import s from './ProfileInfo.module.css';
import avatar from '../../../image/ava-mask.png';
import Preloader from "../../common/Preloader/Preloader";



const ProfileInfo = (props) => {

    // let giveAJobSearchValue = props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу';
    let giveAJobSearchValue = (props) => {props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'};

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>UserId:<br/>
                <span>-{props.profile.userId}</span><br/>
            </div>
            <div>
                <img src={avatar} alt='avatar'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>Contacts:<br/>
                    <span>-{props.profile.contacts.facebook}</span><br/>
                    <span>-{props.profile.contacts.vk}</span><br/>
                    <span>-{props.profile.contacts.instagram}</span>
                </div>
                <div>lookingForAJob?<br/>
                    {/*<span>-{props.profile.lookingForAJob}{props.profile.lookingForAJobDescription}</span>*/}
                    <span>-{props.profile.lookingForAJob}{giveAJobSearchValue}</span><br/>
                    <span>-{props.profile.lookingForAJobDescription}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;