import { takeLatest, call, put, select } from 'redux-saga/effects'
import $ from "jquery";

import {
    FETCH_USERS_REQUEST,
    FETCH_POSITIONS_REQUEST,
    fetchUsersSuccess,
    fetchUsersError,
    fetchPositionsSuccess
} from "./actions";


export function* fetchUsers() {
    let pageLoaded = yield select(state => state.cheerfulUsers.page);
    let params = {
        count: 3,
        page: pageLoaded + 1
    };
    let response = yield call(
        fetch,
        "https://frontend-test-assignment-api.abz.agency/api/v1/users?" + $.param(params)
    );
    yield response.json().then(json => response = json);
    if (response.success) yield put(fetchUsersSuccess(response.users, response.page, response.total_pages));
    else yield put(fetchUsersError(response.message));
}

export function* fetchPositions() {
    let response = yield call(fetch,"https://frontend-test-assignment-api.abz.agency/api/v1/positions");
    yield response.json().then(json => response = json);
    if (response.success) yield put(fetchPositionsSuccess(response.positions));
}

export function* watchFetchUsers() {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsers)
}

export function* watchFetchPositions() {
    yield takeLatest(FETCH_POSITIONS_REQUEST, fetchPositions)
}