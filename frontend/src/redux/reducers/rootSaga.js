import {combineReducers} from "redux";
import {boardSaga} from "./boardSaga";
import {all} from "redux-saga/effects";
import boardReducer from "./boardReducer";
import encarBoardReducer from "./encarBoardReducer";

export function* rootSaga(){
    yield all([boardSaga()])
}

export default combineReducers({
    boardReducer,
    encarBoardReducer
});