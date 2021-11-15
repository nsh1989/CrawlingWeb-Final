import {handleActions} from "redux-actions";
import {Map} from "immutable";

export const getBrandList= () => {
    console.log("getBrandList init")
}

const initialState = {
    selectedBrand : null,
    passParam1 : null,
    passParam2 : null,
}

export default handleActions({

}, initialState);