///// URL에서 조회 파라미터 추출
export const GETKMPARAMS = "GETKMPARAMS";
export const GETAGEPARAMS = "GETAGEPARAMS";
export const GETECODEPARAMS = "GETECODEPARAMS";
///// 목록 선택 브랜드
export const SELECTBRAND = "SELECTBRAND";
///// 목록 선택 모델
export const SELECTMODEL = "SELECTMODEL";
///// 목록 선택 서브모델
export const SELECTSUBMODEL = "SELECTSUBMODEL";
///// 목록 선택 디테일
export const SELECTDETAILMODEL = "SELECTDETAILMODEL";
///// 목록 선택 Year
export const SELECTYEAR = "SELECTYEAR";

export const SETPAGEINDEX = "SETPAGEINDEX";

export const SETTOTALPAGE = "SETTOTALPAGE";

export const SETKM = "SETKM";
export const SETAVGKM = "SETAVGKM";
export const SETAGE = "SETAGE";
export const SETAVGAGE = "SETAVGAGE";
export const SETAVGSALES = "SETAVGSALES";
export const SETAVGPURCHASE = "SETAVGPURCHASE";


///////////////test용
export const MODE_REMOVE = 'REMOVE';
export const MODE_SVAE = 'SAVE';
export const MODE_SELECT_ROW = 'SELECT_ROW';
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";

export function getTypeIncrement() {
    return {
        type: INCREMENT
    };
}

export function getTypeDecrement() {
    return {
        type: DECREMENT
    };
}

export function getTypeADD(value) {
    return {
        type: ADD,
        value: value
    };
}

export function getTypeSUBSTRACT(value) {
    return {
        type: SUBTRACT,
        value: value
    };
}
