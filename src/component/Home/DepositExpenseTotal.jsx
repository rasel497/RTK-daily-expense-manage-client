import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalDepositR, setTotalExpenseR } from '../State/UseReducer';

const DepositExpenseTotal = () => {
    const lists = useSelector(state => state.lists);
    const depoAmount = useSelector(state => state.lists.depostAmount);
    const expAmount = useSelector(state => state.lists.expenseAmount);
    const dispatch = useDispatch();

    const depoTk = lists?.lists.filter(list => list.deposit);
    const expTk = lists?.lists.filter(list => list.expense);

    useEffect(() => {
        dispatch(setTotalDepositR(depoTk.reduce((total, element) => total + element.deposit, 0)));
        dispatch(setTotalExpenseR(expTk.reduce((total, element) => total + element.expense, 0)));
    }, [lists]);

    return (
        <div className="py-2">
            <h2 className="text-white text-xl font-bold">Deposit Total: {depoAmount}</h2>
            <h2 className="text-white text-xl font-bold">Expense Total: {expAmount}</h2>
        </div>
    );
};

export default DepositExpenseTotal;
