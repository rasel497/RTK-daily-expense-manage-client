import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalDepositR, setTotalWithdrawR } from '../State/UseReducer';

const DepositWithdrawTotal = () => {
    const lists = useSelector(state => state.lists);
    const depoAmount = useSelector(state => state.lists.depositAmount);
    const withdrwAmount = useSelector(state => state.lists.withdrawAmount);
    const dispatch = useDispatch();

    const depoTk = lists?.lists.filter(list => list.deposit);
    const withdTk = lists?.lists.filter(list => list.withdraw);

    useEffect(() => {
        dispatch(setTotalDepositR(depoTk.reduce((total, element) => total + element.deposit, 0)));
        dispatch(setTotalWithdrawR(withdTk.reduce((total, element) => total + element.withdraw, 0)));
    }, [lists]);
    return (
        <div className="py-2">
            <h2 className="text-white text-xl font-bold">Deposit Total: {depoAmount}</h2>
            <h2 className="text-white text-xl font-bold">Withdraw Total: {withdrwAmount}</h2>
        </div>
    );
};
export default DepositWithdrawTotal;
