import {FETCH_MESSAGES_FAILURE, FETCH_MESSAGES_SUCCESS, SEND_MESSAGE_FAILURE} from "./actions";

const initialState = {
    messages: [],
    lastDateTime: '',
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MESSAGES_SUCCESS:
            return {...state, messages: action.messages};
        case  FETCH_MESSAGES_FAILURE:
            return {...state, error: action.error};
        case SEND_MESSAGE_FAILURE:
            return {...state, error: action.error};
        default:
            return state;
    }
};


export default reducer;