import service from "../../services/service";

//actions
const SET_BRAND = "SET_BRAND";

//action creators

function setBrand(brand) {
    return{
        type: SET_BRAND,
        brand
    }
}

//API Actions

function getBrand() {
    return(dispatch, getState) =>{
        service.getBrands().then( (res) =>{
            console.log("FilterbarComponent, :", res.data);
            setBrand(res.data)
        });
    }
}

// Initial State

const initialState ={
    selectedOption: null,
    selectedModelOption: null,
};

//Reducer

function reducer (state = initialState, action){
    switch (action.type){
        case SET_BRAND:
            return applySetBrand(state, action);
        default:
            return state;
    }
}

//Reducer Functions

function applySetBrand(state, action) {
    const {brand} = action;
    return {
        ...state,
        brand
    };
}

//Exports

const actionCreators = {
    getBrand
};

export { actionCreators };

export default reducer;