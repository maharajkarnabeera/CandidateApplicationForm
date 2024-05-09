import { configureStore } from "@reduxjs/toolkit";
import reducers from "./jobSlice";

const store = configureStore({reducer:{jobs: reducers}});

export default store;