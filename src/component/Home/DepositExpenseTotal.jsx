import React from 'react';

const DepositExpenseTotal = ({ deposit, expense }) => {
    return (
        <div className='flex py-2'>
            <div>
                <h2 className='text-white text-xl font-bold'>Deposit Total: {deposit}</h2>
                <h2 className='text-white text-xl font-bold'>Expense Total: {expense}</h2>
            </div>
        </div>
    );
};
export default DepositExpenseTotal;