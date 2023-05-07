import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateList } from '../State/UseReducer';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Update = () => {
    const { id } = useParams();
    const { register, formState: { errors } } = useForm();
    const { lists } = useSelector((state) => state.lists);
    const [listUpdate, setListUpdate] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/list/' + id)
            .then(res => {
                setListUpdate({
                    ...listUpdate,
                    purpose_title: res.data[0].purpose_title, deposit: res.data[0].deposit, expense: res.data[0].expense
                })
            })
    }, [lists]);


    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5000/listUpdate/' + id, listUpdate)
            .then(res => {
                console.log(res)
                dispatch(updateList(
                    {
                        id: id,
                        purpose_title: listUpdate.purpose_title,
                        deposit: listUpdate.amount,
                        expense: listUpdate.amount,
                    }
                ))
            })
            .catch(err => console.log(err))
        navigate('/');
    }
    return (
        <div className='flex justify-center items-center rounded-md bg-cyan-600 my-10' style={{ width: "400px" }}>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-white text-center mb-2'>Update History</h2>
                <form onSubmit={handleUpdate}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt  text-white">Expense title name</span></label>
                        <input type="purpose_title" placeholder='write expense purpose' className="input input-bordered w-full max-w-xs"
                            name='purpose_title'
                            {...register("purpose_title", { required: "Title name is requred!" })}
                        />
                        {errors.purpose_title && <p className='text-yellow-300'>{errors.purpose_title?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt text-white">Type of amount?</span></label>
                        <select className="select select-info w-full max-w-xs" {...register("type")}>
                            <option disabled selected>Select</option>
                            <option value="deposit">Deposit</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt text-white">Amount</span></label>
                        <input type='number' placeholder='write amount' className="input input-bordered w-full max-w-xs"
                            {...register("amount", { required: "Amount is required!" })}
                        />
                        {errors.amount && <p className='text-yellow-300'>{errors.amount?.message}</p>}
                    </div>
                    <input className='btn btn-active btn-primary w-full mt-4' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Update;