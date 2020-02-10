import axiosApi from "../axios-api";

export const FETCH_MESSAGES_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';


export const fetchMessagesSuccess = messages => ({type: FETCH_MESSAGES_SUCCESS, messages});


export const fetchMessages = () => {
    return async (dispatch) => {
        const response = await axiosApi.get('/messages');
        dispatch(fetchMessagesSuccess(response.data));
    }
};
