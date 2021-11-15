import {applyMiddleware, createStore, compose} from "redux";
import penderMiddleware from "redux-pender";

import rootReducer from "../reducers/rootReducer"

// redux devTool
export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__OMPOSE__ || compose();

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(penderMiddleware())
    )
);

export default store;