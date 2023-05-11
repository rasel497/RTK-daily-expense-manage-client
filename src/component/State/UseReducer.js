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
        updateClear: false
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
            const { id, purpose_title, deposit, expense } = action.payload;
            const ul = state.lists.find(list => list.id == id);
            if (ul) {
                ul.purpose_title = purpose_title;
                ul.deposit = deposit;
                ul.expense = expense;
            }
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
        totalAmount: (state) => {
            const deposits = state.lists.filter(depo => depo.type === 'deposit');
            const expenses = state.lists.filter(exp => exp.type === 'expense');
            const depositTotal = deposits.reduce((total, depo) => total + depo.amount, 0);
            const expenseTotal = expenses.reduce((total, exp) => total + exp.amount, 0);
            state.total = depositTotal - expenseTotal;
        },
    }
});

export const { setLists, loadList, setUpdate, deleteList, totalAmount, setIsEditingForm, setUpdateClear } = listSlice.actions;
export default listSlice.reducer;