import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryProduct";

const store = configureStore({
    reducer: {
        category: categoryReducer,
    },
});

export default store;
