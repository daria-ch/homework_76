import {FETCH_MESSAGES_FAILURE, FETCH_MESSAGES_SUCCESS, GET_LAST_DATETIME, SEND_MESSAGE_FAILURE} from "./actions";

const initialState = {
    messages: [],
    lastDateTime: '',
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MESSAGES_SUCCESS:
            return {...state, messages: [...state.messages, ...action.messages]};
        case  FETCH_MESSAGES_FAILURE:
            return {...state, error: action.error};
        case SEND_MESSAGE_FAILURE:
            return {...state, error: action.error};
        case GET_LAST_DATETIME:
            return {...state, lastDateTime: action.datetime};
        default:
            return state;
    }
};


export default reducer;