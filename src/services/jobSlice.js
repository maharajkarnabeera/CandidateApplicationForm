import { createSlice } from "@reduxjs/toolkit";

const initialState = { jdList: [] };

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        fetched(state, action) {
            let noNullData = action.payload;
            noNullData = noNullData.filter((item) => (item.minExp !== null && item.maxExp !== null && item.maxJdSalary !== null && item.minJdSalary !== null) === true)
            state.jdList = [...state.jdList, ...noNullData];
        }
    }
});

export const { fetched, updateData } = jobSlice.actions;
export default jobSlice.reducer;