import { configureStore } from "@reduxjs/toolkit";
import { reducerss } from "./reducers/index";
const store = configureStore({ reducer: reducerss, })
export default store