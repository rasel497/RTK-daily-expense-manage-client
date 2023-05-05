import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loadUser: true,
    },
    reducers: {
        setUsers: (state, action) => {
            state.loadUser = false;
            state.users = action.payload;
        },
        loadUser: (state, action) => {
            state.loadUser = action.payload;
        },
        
    }
});

export const { setUsers, loadUser } = userSlice.actions;
export default userSlice.reducer;