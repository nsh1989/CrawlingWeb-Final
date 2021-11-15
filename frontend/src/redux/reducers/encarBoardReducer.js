import {createAction, handleActions} from "redux-actions";
import {
    GETAGEPARAMS, GETECODEPARAMS,
    GETKMPARAMS,
    GetTypeUrlParams,
    GETURLPARAMS,
    SELECTBRAND, SELECTDETAILMODEL,
    SELECTMODEL,
    SELECTSUBMODEL, SELECTYEAR, SETPAGEINDEX,
    setSelectBrand
} from "../actions/types";

export const getBrandList= () => {
    console.log("getBrandList init")
}

const initialState = {
    selectedBrand : null,
    selectedModel : null,
    selectedSubModel : null,
    selectedDetailModel : null,
    selectedYear : null,
    KMparam : null,
    Ageparam : null,
    Ecodeparam : null,
    AvgSalesPrice : null,
    AvgKm : null,
    AvgAge : null,
    totalCars : null,
    pageIndex : 1,
    totalPage : 100,
}

export const getKMParams = createAction(GETKMPARAMS, value => value);
export const getAgeParams = createAction(GETAGEPARAMS, value => value);
export const getEcodeParams = createAction(GETECODEPARAMS, value => value);
export const selectBrand = createAction(SELECTBRAND, value => value);
export const selectModel = createAction(SELECTMODEL, value => value);
export const selectSubModel = createAction(SELECTSUBMODEL, value => value);
export const selectDetailModel = createAction(SELECTDETAILMODEL, value => value);
export const selectYear = createAction(SELECTYEAR, value => value);
export const setPageIndex = createAction(SETPAGEINDEX, value => value);

export default handleActions({
    SETPAGEINDEX : (state, action) => ({
        ...state,
        pageIndex : action.payload,
    }),
    GETKMPARAMS : (state, action) => (
        {
        ...state,
        KMparam : action.payload,
        // Ageparam : action.meta.age,
        // Ecodeparam : action.meta.ecode
    }),
    GETAGEPARAMS : (state, action) => (
        {
            ...state,
            Ageparam : action.payload
        }),
    GETECODEPARAMS : (state, action) => (
        {
            ...state,
            Ecodeparam : action.payload
        }),
    SELECTBRAND : (state, action) => ({
        ...state,
        selectedBrand : action.payload
    }),
    SELECTMODEL : (state, action) => ({
        ...state,
        selectedModel : action.payload
    }),
    SELECTSUBMODEL : (state, action) => ({
        ...state,
        selectedSubModel : action.payload
    }),
    SELECTDETAILMODEL : (state, action) => ({
        ...state,
        selectedDetailModel : action.payload
    }),
    SELECTYEAR : (state, action) => ({
        ...state,
        selectedYear : action.payload
    })

}, initialState);