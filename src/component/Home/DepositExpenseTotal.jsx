import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const DepositExpenseTotal = () => {
    const [totalDeposit, setTotalDeposit] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);

    const lists = useSelector(state => state.lists);
    // console.log('AmountList', lists);

    const depoTk = lists?.lists.filter(list => list.deposit)
    // console.log('depTk', depoTk);
    const expTk = lists?.lists.filter(list => list.expense);


    useEffect(() => {
        let tempExpense = 0;
        let tempDeposit = 0;

        depoTk.forEach(element => {
            tempDeposit += element.deposit;
        });
        expTk.forEach((element) => {
            tempExpense += element.expense;
            // console.log(tempExpense, 'totalExp')

        })
        setTotalDeposit(tempDeposit)
        setTotalExpense(tempExpense)

        console.log(totalExpense, 'totalexpense')
    }, [lists]);


    return (
        <div className='py-2'>
            <h2 className='text-white text-xl font-bold'>Deposit Total: {totalDeposit}</h2>
            <h2 className='text-white text-xl font-bold'>Expense Total: {totalExpense}</h2>
        </div>
    );
};
export default DepositExpenseTotal;