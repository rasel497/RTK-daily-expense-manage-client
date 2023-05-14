import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    // Main Branch এ, lists নামে useSelector hook acces নিতে হবে।
    // initialState এটি হচ্ছে useState এর initialstate এগুলা useSelector hook থেকে {Object} হিসেবে access করবো।
    name: "lists",
    initialState: {
        lists: [],
        loadList: true,
        updateUser: null,
        isEditing: false,
        updateClear: false,
        depostAmount: 0,
        expenseAmount: 0,
        totalAmount: 0,
    },
    /* reducers এর ভিতরের অ্যাকশন গুলা হচ্ছে useState এর setState=updateVlaue। এই setState আমি এখান থেকে export করে 
      দিবো এবং যে কম্পোনেন্ট এ use করবো, সেই কম্পোনেন্ট এ ইম্পরট করে নিতে হবে। */
    reducers: {
        setLists: (state, action) => {
            state.loadList = false;
            state.lists = action.payload;
        },
        loadList: (state, action) => {
            state.loadList = action.payload;
        },
        setUpdate: (state, action) => {
            state.updateUser = action.payload;
        },

        setUpdateClear: (state) => {
            state.updateClear = true;
        },

        setIsEditingForm: (state) => {
            state.isEditing = true
        },
        deleteList: (state, action) => {
            const { id } = action.payload;
            state.lists = state.lists.filter(f => f.id !== id);
        },

        setDeposit: (state, action) => {
            state.depostAmount += action.payload;
        },
        setExpense: (state, action) => {
            state.expenseAmount += action.payload;
        },

        setTotalAmount: (state, action) => {
            state.totalAmount = action.payload;
        },
    }
});

export const { setLists, loadList, setUpdate, deleteList, setIsEditingForm, setDeposit, setExpense } = listSlice.actions;
export default listSlice.reducer;