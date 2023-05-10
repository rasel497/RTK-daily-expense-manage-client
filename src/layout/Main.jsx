import React from 'react';
import Navbar from '../component/Shared/Navbar/Navbar';
import AddView from '../component/Home/AddView';
import ListView from '../component/Home/ListView';
import DepositExpenseTotal from '../component/Home/DepositExpenseTotal';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-around'>
                <AddView />
                <ListView />
            </div>
            <div className='flex justify-center bg-teal-500 rounded-md mx-32'>
                <DepositExpenseTotal />
            </div>
        </div>
    );
};
export default Main;