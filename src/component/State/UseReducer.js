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
        depostAmount: 0,
        expenseAmount: 0,
        totalAmount: 0,
    },
    /* reducers এর ভিতরের অ্যাকশন গুলা হচ্ছে useState এর setState=updateVlaue। এই setState আমি এখান থেকে export করে 
      দিবো এবং যে কম্পোনেন্ট এ use করবো, সেই কম্পোনেন্ট এ ইম্পরট করে নিতে হবে। */
    // reducers
    reducers: {
        setLists: (state, action) => {
            state.loadList = false;
            state.lists = action.payload;
        },
        loadList: (state, action) => {
            state.loadList = action.payload;
        },
        setUpdate: (state, action) => {
            // state represents the updated/current state of the Redux store,
            // action contains information about the action being dispatched, including the payload.
            // action a info. gula thke and se dispatch er madhome updated state a info gula pathai dey. ja payload er maddhome obj pai 
            // action er moddhe dispatch/pathano a info. ase. ja payload er maddhome obj hisebe pathai
            state.updateUser = action.payload;
        },
        setIsEditingForm: (state) => {
            state.isEditing = true;
        },
        setAddForm: (state) => {
            state.isEditing = false;
        },
        deleteList: (state, action) => {
            const { id } = action.payload;
            state.lists = state.lists.filter(f => f.id !== id);
        },
        setTotalDepositR: (state, action) => {
            state.depostAmount = action.payload;
        },
        setTotalExpenseR: (state, action) => {
            state.expenseAmount = action.payload;
        },

        // setTotalAmount: (state, action) => {
        //     state.totalAmount = action.payload;
        // },
    }
});

export const { setLists, loadList, setAddForm, setUpdate, setUpdateClear, deleteList, setIsEditingForm, setTotalDepositR, setTotalExpenseR } = listSlice.actions;
export default listSlice.reducer;