import { Productreducer } from "./Productreducer";
import { combineReducers } from "redux";

export const reducer=combineReducers({
    productsData:Productreducer,
})