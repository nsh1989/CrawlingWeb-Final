import{
    GET_BRAND_STATE
} from "../actions/types";

const initialState = [
    {selectedBrand : "selectedBrand test"},
];

function CategoryReducer( initState = initialState, action){
    const {type, payload} = action;
    switch (type) {
        case GET_BRAND_STATE:
            return [...initState, payload];
        default:
            return initState
    }
}

export default CategoryReducer;