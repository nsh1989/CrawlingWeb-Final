import {createAction, handleActions} from "redux-actions";
import {
    GETAGEPARAMS,
    GETECODEPARAMS,
    GETKMPARAMS,
    SELECTBRAND,
    SELECTDETAILMODEL,
    SELECTMODEL,
    SELECTSUBMODEL,
    SELECTYEAR,
    SETAGE,
    SETAVGAGE,
    SETAVGKM,
    SETAVGPURCHASE,
    SETAVGSALES,
    SETKM,
    SETPAGEINDEX,
    SETTOTALPAGE,
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
    km : null,
    age : null,
    KMparam : 10000,
    Ageparam : 12,
    Ecodeparam : null,
    AvgSalesPrice : null,
    AvgPurchasePrice : null,
    AvgKm : null,
    AvgAge : null,
    totalCars : null,
    pageIndex : 1,
    totalPage : null,
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
export const setTotalPage = createAction(SETTOTALPAGE, value => value);
export const setKm = createAction(SETKM, value => value);
export const setAvgKm = createAction(SETAVGKM, value => value);
export const setAge = createAction(SETAGE, value => value);
export const setAvgAge = createAction(SETAVGAGE, value => value);
export const setAvgSales = createAction(SETAVGSALES, value => value);
export const setAvgPurchase = createAction(SETAVGPURCHASE, value => value);


export default handleActions({
    SETTOTALPAGE : (state, action) => ({
        ...state,
        totalPage : action.payload,
    }),
    SETKM : (state, action) => ({
        ...state,
        km : action.payload,
    }),
    SETAVGKM : (state, action) => ({
        ...state,
        AvgKm : action.payload,
    }),
    SETAGE : (state, action) => ({
        ...state,
        age : action.payload,
    }),
    SETAVGAGE : (state, action) => ({
        ...state,
        AvgAge : action.payload,
    }),
    SETAVGSALES : (state, action) => ({
        ...state,
        AvgSalesPrice : action.payload,
    }),
    SETAVGPURCHASE : (state, action) => ({
        ...state,
        AvgPurchasePrice : action.payload,
    }),
    SETPAGEINDEX : (state, action) => ({
        ...state,
        pageIndex : action.payload,
    }),
    GETKMPARAMS : (state, action) => (
        {
        ...state,
        KMparam : action.payload
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