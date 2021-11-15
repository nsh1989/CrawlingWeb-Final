import { INCREMENT, DECREMENT, SUBTRACT, ADD, MODE_REMOVE, MODE_SVAE, MODE_SELECT_ROW} from '../actions/types'
import {delay} from 'redux-saga'
import {put, takeEvery} from 'redux-saga/effects'
import {handleActions, createAction} from 'redux-actions';

export const boardSave = (saveData) => ({
    type: MODE_SVAE,
    saveData : {
        boardId : saveData.boardId,
        boardTitle : saveData.boardTitle,
        boardContent: saveData.boardContent
    }
});

export const boardRemove = (boardId) => ({
    type: MODE_REMOVE,
    boardId: boardId
})

export const boardSelectRow = (boardId) => ({
    type: MODE_SELECT_ROW,
    boardId: boardId
})

const initialState = {
    boards : [],
    lastId: "Test LastId",
    selectRowData: {},
    counter: 0
}

//Reducer

export default function boardReducer(state=initialState, action){
    switch(action.type){
        case MODE_REMOVE:
            return{
                ...state, boards: state.boards.filter(row=> row.boardId !== action.boardId)
            };
        case MODE_SVAE:
            if(action.saveData.boardId === ''){
                return {
                    lastId: state.lastId + 1,
                    boards: state.boards.concat ({
                        ...action.saveData
                    })
                }
            } else {
                return {...state, boards: state.boards.map(
                        data => data.boardId === action.saveData.boardId ? {...action.saveData}:data), selectRowData: {}};
            }
        case MODE_SELECT_ROW:
            return {
                ...state,
                selectRowData: state.boards.find(row=> row.boardId === action.boardId)
            }
        case INCREMENT:
            console.log(state.counter)
            return{
                ...state,
                counter: state.counter+1
            }
        case DECREMENT:
            return{
                ...state,
                counter: state.counter-1
            }
        case ADD:
            console.log(action.value)
            return{
                ...state,
                counter: state.counter+action.value
            }
        case SUBTRACT:

            console.log("subtract", action.value)
            console.log("subtract", state.lastId)
            return{
                ...state,
            counter: state.counter-action.value
            }
        default:
            return state;
    }
}

