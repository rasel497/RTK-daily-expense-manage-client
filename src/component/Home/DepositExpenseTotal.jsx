import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalAmount } from '../State/UseReducer';

const DepositExpenseTotal = () => {
    const lists = useSelector(state => state.lists)
    const dispatch = useDispatch();
    // console.log('Nexwwww', lists)
    const [count, setCount] = useState(0);

    useEffect((data) => {
        axios.get('http://localhost:5000/totalBalance/', data)
            .then(res => {
                // console.log('upppp', res);
                // const amount = values.type === 'deposit' ? values.depositAmount : values.type === 'expense' ? values.expenseAmount : 0;
                dispatch(totalAmount({ deposit: res.data[0].amount, expense: res.data[0].amount }))
            })
            .catch(err => console.log(err))
    }, [])

    // console.log('fff', deposit, expense);
    // res.lists.map(r => {
    //     setDeposit(deposit => deposit + r.deposit)
    //     setExpense(expense => expense + r.expense)
    //     console.log('Reeexxxxx', r)
    // })
    return (
        <div className='py-2'>
            <div>
                <h2 className='text-white text-xl font-bold'>Balance Total:{count}</h2>
            </div>
        </div>
    );
};
export default DepositExpenseTotal;