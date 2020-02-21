import { all } from "redux-saga/effects"
import {watchFetchUsers, watchFetchPositions} from "./CheerfulUsers/saga";
import {watchFormPost} from "./RegForm/saga";

export default function* rootSaga() {
    yield all([
        watchFetchUsers(),
        watchFetchPositions(),
        watchFormPost()
    ])
}