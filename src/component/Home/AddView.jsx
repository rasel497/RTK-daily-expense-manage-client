import axios from 'axios';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { loadList } from '../State/UseReducer';
import { useEffect, useState } from 'react';

const AddView = () => {
    const { lists, updateUser } = useSelector((state) => state.lists);
    const { isEditing } = useSelector((state) => state.lists);
    const dispatch = useDispatch();
    const { register, formState: { errors, isSubmitSuccessful }, handleSubmit, reset, formState } = useForm();

    const [values, setValues] = useState();
    console.log('NewValues', values);

    // reset form use for default values set
    // useEffect(() => {
    //     if (formState.isSubmitSuccessful) {
    //         reset({
    //             purpose_title: "ff",
    //             type: "expense",
    //             amount: 20,
    //         })
    //     }
    // }, [formState, reset]);

    // reset

    useEffect(() => {
        // firstly we checque my values have or not otherwise error undefined p. null
        if (values) {
            console.log('kkkk77', values)
            reset({
                purpose_title: values.purpose_title,
                type: values.deposit ? 'deposit' : 'expense',
                amount: values.deposit ? values.deposit : values.expense
            })
        }
    }, [values])


    // create api - get and show list of id history when click edit
    useEffect(() => {
        setValues(updateUser)
    }, [updateUser]);


    // successfully done
    const handlePostSubmit = (data) => {
        console.log('Reeee', data);
        axios.post('http://localhost:5000/exphistorypost/', data)
            .then(res => {
                console.log(res);
                dispatch(loadList(true));
            })
            .catch(err => console.log(err))
        reset();
    }
    return (
        <div className='flex justify-center items-center rounded-md bg-cyan-600 my-10'>
            <div className='w-96 p-7'>
                {
                    isEditing ?
                        <h2 className='text-3xl font-bold text-white text-center mb-2'>Update amount</h2>
                        :
                        <h2 className='text-3xl font-bold text-white text-center mb-2'>Add amount</h2>
                }
                <form onSubmit={handleSubmit(handlePostSubmit)}>
                    {/* <form onSubmit={onSubmit((handlePostSubmit) => { reset(); })}> */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt  text-white">Expense title name</span></label>
                        <input type="purpose_title" placeholder='write expense purpose' className="input input-bordered w-full max-w-xs"
                            {...register("purpose_title", { required: "Title name is requred!" })}
                        />
                        {errors.purpose_title && <p className='text-yellow-300'>{errors.purpose_title?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt text-white">Type of amount?</span></label>
                        <select className="select select-info w-full max-w-xs" {...register("type")}>
                            <option defaultChecked>Select</option>
                            <option value="deposit">Deposit</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt text-white">Amount</span></label>
                        <input type='number'
                            placeholder='write amount' className="input input-bordered w-full max-w-xs"
                            {...register("amount", { required: "Amount is required!" })}
                        />
                        {errors.amount && <p className='text-yellow-300'>{errors.amount?.message}</p>}
                    </div>
                    {
                        isEditing ?
                            <button className='btn btn-active btn-primary w-full mt-4' type="submit">Update</button>
                            :
                            <button className='btn btn-active btn-primary w-full mt-4' type="submit">Add</button>
                    }
                </form>
            </div>
        </div >
    );
};

export default AddView;