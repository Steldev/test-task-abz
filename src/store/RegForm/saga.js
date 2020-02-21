import { takeLatest, call, put } from 'redux-saga/effects'

import { FORM_POST_REQUEST } from "./actions";
import { formPostSuccess, formPostError } from "./actions";
import { fetchUsersClear, fetchUsersRequest } from "../CheerfulUsers/actions";

export function* formPost(action) {
    let response = yield call(fetch, 'https://frontend-test-assignment-api.abz.agency/api/v1/token');
    yield response.json().then(json => response = json);
    if (!response.success) {
        put(formPostError(response.message || 'Token request error'));
        return;
    }
    let token = response['token'];

    let formData = new FormData();
    formData.append('position_id', action.payload.position - 0 + 1);
    formData.append('name', action.payload.name);
    formData.append('email', action.payload.email);
    formData.append('phone', action.payload.phone);
    formData.append('photo', action.payload.photo);
    let request = {
        url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
        options: {
            method: 'POST',
            body: formData,
            headers: {
                'Token': token
            }
        }
    };
    response = yield call(fetch, request.url, request.options);
    yield response.json().then(json => response = json).catch(error => put(formPostError(error)));
    if (!response.success) {
        yield put(formPostError(response.message || 'Form post error'));
        return;
    }
    yield put(formPostSuccess(`${response.message} with id: ${response.user_id}`));
    yield fetchUsersClear();
    yield fetchUsersRequest();
}

export function* watchFormPost() {
    yield takeLatest(FORM_POST_REQUEST, formPost)
}
