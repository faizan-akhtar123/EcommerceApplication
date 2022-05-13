import { reducer } from "../product-reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";
export const store=configureStore(reducer, {})