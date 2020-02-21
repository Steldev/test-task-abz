import {FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, FETCH_USERS_CLEAR} from "./actions";

const initialState = {
    users: [],
    page: 0,
    total_pages: null,
    message: null
};

export default function cheerfulUsersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: state.users.concat(action.payload.users),
                page: action.payload.page,
                total_pages: action.payload.total_pages
            };
        case FETCH_USERS_ERROR:
            return {...state, message: action.payload};
        case FETCH_USERS_CLEAR:
            return {...state, users: []};
        default:
            return state;
    }
}