import axiosApi from "../axios-api";

export const FETCH_MESSAGES_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE';
export const GET_LAST_DATETIME = 'GET_LAST_DATETIME';


export const fetchMessagesSuccess = messages => ({type: FETCH_MESSAGES_SUCCESS, messages});
export const fetchMessagesFailure = error => ({type: FETCH_MESSAGES_FAILURE, error});
export const sendMessageSuccess = () => ({type: SEND_MESSAGE_SUCCESS});
export const sendMessageFailure = error => ({type: SEND_MESSAGE_FAILURE, error});
export const getLastDatetime = datetime => ({type: GET_LAST_DATETIME, datetime});


export const fetchMessages = (datetime) => {
    return async (dispatch) => {
        try {
            const response = await axiosApi.get('/messages?datetime=' + datetime);
            console.log(response.data);
            if (response.data) {
                if (response.data.length === 0) {
                    dispatch(fetchMessagesSuccess(response.data));
                } else {
                    console.log(response.data[response.data.length - 1].datetime);
                    dispatch(getLastDatetime(response.data[response.data.length - 1].datetime));
                    dispatch(fetchMessagesSuccess(response.data));
                }
            }
        } catch (error) {
            dispatch(fetchMessagesFailure(error.response.data.error))
        }
    }
};


export const sendMessage = (message) => {
    return async dispatch => {
        try {
            await axiosApi.post('/messages', message);
            dispatch(sendMessageSuccess());
        } catch (error) {
            dispatch(sendMessageFailure(error.response.data.error))
        }
    }
};