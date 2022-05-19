import { combineReducers } from "redux";
import { selectedProducts } from "../action/productsActions";
import { productsReducer, selectedProductsReducer } from "./productsReducer";

export const reducerss = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer
})

// Now I am going to give key as product bacause we are using it in the useselector hook in Product details

