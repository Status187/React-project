let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'It\'s my last post', likesCount: 18},
                {id: 4, message: 'and you?', likesCount: 19},
                {id: 5, message: 'too', likesCount: 2},
                {id: 6, message: 'I see', likesCount: 1},
            ],
            newPostText: 'it-status'

        },
        dialogsPage: {
            avatar: [
                {id:1, src: 'Maksim'},
                {id:2, src: '../image/ava_2'},
                {id:3, src: '../image/ava_1'},
                {id:4, src: '../image/ava_2'},
                {id:5, src: '../image/ava_1'},
                {id:6, src: '../image/ava_2'},
            ],
            dialogs: [
                {id: 1, name: 'Maksim'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Artem'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Mishael'},
                {id: 6, name: 'Kate'},
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'i fine'},
                {id: 4, message: 'and you?'},
                {id: 5, message: 'too'},
                {id: 6, message: 'I see'},
            ],
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber()  {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observe) {
        this._callSubscriber = observe;
    },
}

export default store;
window.store = store;
// store - OOP