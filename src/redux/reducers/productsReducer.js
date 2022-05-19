import { ACTIONTYPES } from "../constants/action-types";

const initialState = {
    products: [

    ]
}


export const productsReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ACTIONTYPES.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state
    }

};
export const selectedProductsReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case ACTIONTYPES.SELECTED_PRODUCTS:
            return { ...state, ...payload }
        case ACTIONTYPES.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state
    }

};


