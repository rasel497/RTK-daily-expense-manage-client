import React from 'react';
import Navbar from '../component/Shared/Navbar/Navbar';
import AddView from '../component/Home/AddView';
import ListView from '../component/Home/ListView';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-around'>
                <AddView />
                <ListView />
            </div>
        </div>
    );
};

export default Main;