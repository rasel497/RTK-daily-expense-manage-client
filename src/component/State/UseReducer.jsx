import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "lists",
    initialState: {
        lists: [],
        loadList: true,
        totalAmount: [0]
    },
    reducers: {
        setLists: (state, action) => {
            state.loadList = false;
            state.lists = action.payload;
        },
        totalAmount: (state) => {
            const deposits = state.lists.filter(depo => depo.type === 'deposit');
            const expenses = state.lists.filter(exp => exp.type === 'expense');
            const depositTotal = deposits.reduce((total, depo) => total + depo.amount, 0);
            const expenseTotal = expenses.reduce((total, exp) => total + exp.amount, 0);
            state.total = depositTotal - expenseTotal;
        },
        loadList: (state, action) => {
            state.loadList = action.payload;
        },
        updateClear: (state, action) => {
            // logic null/reset
        },
        updateList: (state, action) => {
            const { id, purpose_title, deposit, expense } = action.payload;
            const ul = state.users.find(user => user.id == id);
            if (ul) {
                ul.purpose_title = purpose_title;
                ul.amount = deposit;
                ul.amount = expense;
            }
        },
        deleteList: (state, action) => {
            const { id } = action.payload;
            state.lists = state.lists.filter(f => f.id !== id);
        }
    }
});

export const { setLists, loadList, totalAmount, updateList, deleteList } = listSlice.actions;
export default listSlice.reducer;