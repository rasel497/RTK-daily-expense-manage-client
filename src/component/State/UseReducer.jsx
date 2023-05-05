import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "lists",
    initialState: {
        lists: [],
        loadList: true,
    },
    reducers: {
        setLists: (state, action) => {
            state.loadList = false;
            state.lists = action.payload;
        },
        addList: (state, action) => {
            state.loadList = true;
            state.addList = action.payload;
        },

        loadList: (state, action) => {
            state.loadList = action.payload;
        },
        deleteList: (state, action) => {
            const { id } = action.payload;
            state.lists = state.lists.filter(f => f.id !== id);
        }
    }
});

export const { setLists, loadList, addList, deleteList } = listSlice.actions;
export default listSlice.reducer;