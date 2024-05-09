import { configureStore } from "@reduxjs/toolkit";
import reducers from "./companyslices";

const store = configureStore({reducer:{jobs: reducers}});

export default store;