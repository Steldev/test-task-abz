import {CLEAR_FORM_ERROR, FORM_POST_ERROR, FORM_POST_SUCCESS, CLOSE_MODAL} from "./actions";

const initialState = {
    showModal: false,
    errors: null
};

export default function regFormReducer(state = initialState, action) {
    switch (action.type) {
        case FORM_POST_SUCCESS:
            return {...state, showModal: true};
        case FORM_POST_ERROR:
            return {...state, errors: action.payload};
        case CLEAR_FORM_ERROR:
            return {...state, errors: null};
        case CLOSE_MODAL:
            return {...state, showModal: false};
        default:
            return state;
    }
};