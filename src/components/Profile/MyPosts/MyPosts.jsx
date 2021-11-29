import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' like='12'/>
                <Post message="It's my first post" like='20'/>
                <Post message="It's my first posdt" like='17'/>
            </div>
        </div>
    )
}

export default MyPosts;