import React, { useState } from 'react';
import Navbar from '../component/Shared/Navbar/Navbar';
import AddView from '../component/Home/AddView';
import ListView from '../component/Home/ListView';
import DepositExpenseTotal from '../component/Home/DepositExpenseTotal';

const Main = () => {
    const [deposit, setDeposit] = useState(0);
    const [expense, setExpense] = useState(0);

    return (
        <div>
            <Navbar />
            <div className='flex justify-around'>
                <AddView deposit={deposit} expense={expense}
                    setDeposit={setDeposit} setExpense={setExpense} />
                <ListView />
            </div>
            <div className='flex justify-center bg-teal-500 rounded-md mx-32'>
                <DepositExpenseTotal deposit={deposit} expense={expense} />
            </div>
        </div>
    );
};

export default Main;