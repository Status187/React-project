import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 1, message: 'It\'s my first post', likesCount: 11},
        {id: 1, message: 'It\'s my last post', likesCount: 18},
        {id: 1, message: 'and you?', likesCount: 19},
        {id: 1, message: 'too', likesCount: 2},
        {id: 1, message: 'I see', likesCount: 1},
    ];

    let postsElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;