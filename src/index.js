import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 1, message: 'It\'s my first post', likesCount: 11},
    {id: 1, message: 'It\'s my last post', likesCount: 18},
    {id: 1, message: 'and you?', likesCount: 19},
    {id: 1, message: 'too', likesCount: 2},
    {id: 1, message: 'I see', likesCount: 1},
];

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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


