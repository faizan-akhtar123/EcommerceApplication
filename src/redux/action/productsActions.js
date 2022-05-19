import { ACTIONTYPES } from "../constants/action-types";

// JAVASCRIPT ACTIONS ARE PLAIN OBJECT WHICH RETURN KEY AS TYPE AND PAYLOAD

export const setProducts = (products) => {
    return {
        type: ACTIONTYPES.SET_PRODUCTS,
        payload: products,
    }
}
export const selectedProducts = (product) => {
    return {
        type: ACTIONTYPES.SELECTED_PRODUCTS,
        payload: product,
    }
}
// whenever the component gets destroyed we can remove the selected product
export const removeSelectedProduct = () => {
    return {
        type: ACTIONTYPES.REMOVE_SELECTED_PRODUCT,


    }
}