export const FORM_POST_REQUEST = "FORM_POST_REQUEST";
export const FORM_POST_SUCCESS = "FORM_POST_SUCCESS";
export const FORM_POST_ERROR = "FORM_POST_ERROR";

export const CLEAR_FORM_ERROR = "CLEAR_FORM_ERROR";

export const CLOSE_MODAL = "CLOSE_MODAL";

export const formPostRequest = data => ({
    type: FORM_POST_REQUEST,
    payload: data
});

export const formPostSuccess = () => ({
    type: FORM_POST_SUCCESS
});

export const formPostError = error => ({
    type: FORM_POST_ERROR,
    payload: error
});

export const clearFormError = () => ({
    type: CLEAR_FORM_ERROR,
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});
