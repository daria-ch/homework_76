import {FETCH_MESSAGES_SUCCESS} from "./actions";

const initialState = {
    messages: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MESSAGES_SUCCESS:
            return {...state, messages: action.messages};
        default:
            return state;
    }
};


export default reducer;