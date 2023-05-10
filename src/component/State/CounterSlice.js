import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",

    initialState: {
        num: 0,
    },

    reducers: {
        setIncreament: (state, action) => {
            console.log(action.payload)
            state.num += action.payload;
        },
        setDecreament: (state, action) => {
            state.num -= action.payload;
        }
    }
});

export const { setIncreament, setDecreament, } = counterSlice.actions;
export default counterSlice.reducer;


