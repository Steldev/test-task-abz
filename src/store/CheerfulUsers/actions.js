export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const FETCH_USERS_CLEAR = 'FETCH_USERS_CLEAR';

export const FETCH_POSITIONS_REQUEST = 'FETCH_POSITIONS_REQUEST';
export const FETCH_POSITIONS_SUCCESS = 'FETCH_POSITIONS_SUCCESS';

export const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users, page, total_pages) => ({
    type: FETCH_USERS_SUCCESS,
    payload: {
        users,
        page,
        total_pages
    }
});

export const fetchUsersError = message => ({
    type: FETCH_USERS_ERROR,
    payload: message
});

export const fetchUsersClear = () => ({
    type: FETCH_USERS_CLEAR,
});

export const fetchPositionsRequest = () => ({
    type: FETCH_POSITIONS_REQUEST,
});

export const fetchPositionsSuccess = positions => ({
    type: FETCH_POSITIONS_SUCCESS,
    payload: positions
});
