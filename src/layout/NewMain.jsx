import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIncreament, setDecreament } from '../component/State/CounterSlice';

const NewMain = () => {
    const count = useSelector((state) => state.counter.num)
    const dispatch = useDispatch();
    const [countValue, setCountValue] = useState(0);

    console.log('global count', count);
    console.log('local count', countValue);

    // useEffect(() => {
    //     console.log('mount');
    //     return () => {
    //         console.log('unmount');
    //     }
    // }, [])

    useEffect(() => {
        setCountValue(count)
    }, [count])

    return (
        <div>
            <div>
                <h2 className="text-green-600 text-4xl">Global Count:{count}</h2>
                <br />
                <h2 className="text-green-600 text-4xl">Count:{countValue}</h2>
            </div>
            <div>
                <button onClick={() => dispatch(setIncreament(1))} className="btn btn-sm text-green-600 text-3xl">+</button>
                <button onClick={() => dispatch(setDecreament(1))} className="btn btn-sm text-red-600 text-3xl">-</button>
            </div>
        </div>
    );
};


export default NewMain;