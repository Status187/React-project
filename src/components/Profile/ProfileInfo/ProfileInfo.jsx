import React from 'react';
import s from './ProfileInfo.module.css';
import avatar from '../../../image/ava-mask.png';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    // let giveAJobSearchValue =  (props.profile.lookingForAJob) ? 'Ищу работу' : 'Не ищу работу';
    // let giveAJobSearchValue;
    //     if (props.profile.lookingForAJob === true ) {
    //         giveAJobSearchValue = 'Ищу работу'
    //     }  else {
    //         giveAJobSearchValue = 'Не ищу работу'
    //     };

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>Id:
                <span> № {props.profile.userId}</span><br/>
            </div>
            <div>
                <img src={avatar} alt='avatar'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>Contacts:<br/>
                    <span>-{props.profile.contacts.facebook}</span><br/>
                    <span>-{props.profile.contacts.vk}</span><br/>
                    <span>-{props.profile.contacts.instagram}</span>
                </div>
                <div>lookingForAJob?<br/>
                    {/*<span>-{props.profile.lookingForAJob}{props.profile.lookingForAJobDescription}</span>*/}
                    <span>-{props.profile.lookingForAJob}</span><br/>
                    <span>-{props.profile.lookingForAJobDescription}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;