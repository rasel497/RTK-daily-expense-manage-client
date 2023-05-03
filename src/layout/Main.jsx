import React from 'react';
import Navbar from '../component/Shared/Navbar/Navbar';
import AddView from '../component/Home/AddView';

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-around'>
                <AddView />
            </div>
        </div>
    );
};

export default Main;