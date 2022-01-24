import React from "react";
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-1.jpg',
                    followed: false,
                    fullName: 'Maksim',
                    status: 'I am a boss',
                    location: {
                        city: 'Tver',
                        country: 'Russia'
                    }
                },
                {
                    id: 1, photoUrl: 'https://yt3.ggpht.com/a/AATXAJwvrbzr262fDtWZU-rQ-5jpgvQtTWv0YjJaDgVP=s900-c-k-c0xffffffff-no-rj-mo',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {
                        city: 'Rzhev',
                        country: 'Russia'
                    }
                },
                {
                    id: 1, photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLQr01L0gOssXNfn-q5Mr6kgloNva-_OrRLiDAm4Bw=s900-c-k-c0x00ffffff-no-rj',
                    followed: false,
                    fullName: 'Pasha',
                    status: 'I am a boss too',
                    location: {
                        city: 'Mockow',
                        country: 'Russia'
                    }
                },
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt='avatar' className={styles.userPhoto}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={ () => { props.unfollow(u.id) } }>UnFollow</button>
                            : <button onClick={ () => { props.follow(u.id) } }>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
    }

    </div>
}

export default Users;