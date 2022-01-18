const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;