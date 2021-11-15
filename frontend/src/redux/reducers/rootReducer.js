import { combineReducers } from 'redux';
import {penderReducer} from "redux-pender";
import boardReducer from './boardReducer';
import encarBoardReducer from './encarBoardReducer';
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
    boardReducer,
    encarBoardReducer,
    uiReducer,
    pender: penderReducer
});

export default rootReducer;