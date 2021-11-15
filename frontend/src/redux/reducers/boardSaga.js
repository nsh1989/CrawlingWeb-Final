import {createAction, handleActions} from "redux-actions";
import {delay} from "redux-saga";
import {put, takeEvery} from "redux-saga/effects";

const INCRE = 'INCRE';
const DECRE = 'DECRE';
const INCRE_AYNC = 'INCRE_AYNC';
const DECRE_AYNC = 'DECRE_AYNC';

export const increment = createAction(INCRE);
export const decrement = createAction(DECRE);
export const incrementAsync = createAction(INCRE_AYNC);
export const decrementAsync = createAction(DECRE_AYNC);

function* incrementAsyncSaga() {
    yield delay(1000);
    yield put(increment());
}
function* decrementAsyncSaga() {
    yield delay(1000);
    yield put(increment());
}

export function* boardSaga() {
    yield takeEvery(INCRE_AYNC, incrementAsyncSaga);
    yield takeEvery(DECRE_AYNC, decrementAsyncSaga);
}

export default handleActions(
    {
        [INCRE]: (state, action) => state + 1,
        [DECRE]: (state, action) => state - 1
    },
    1
);