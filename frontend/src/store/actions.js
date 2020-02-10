import axiosApi from "../axios-api";

export const FETCH_MESSAGES_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';


export const fetchMessagesSuccess = messages => ({type: FETCH_MESSAGES_SUCCESS, messages});
export const sendMessageSuccess = () => ({type: ADD_MESSAGE_SUCCESS});


export const fetchMessages = () => {
    return async (dispatch) => {
        const response = await axiosApi.get('/messages');
        dispatch(fetchMessagesSuccess(response.data));
    }
};


export const sendMessage = (message) => {
    return async (dispatch) => {
        await axiosApi.post('/messages', message);
        dispatch(sendMessageSuccess());
    };
};
