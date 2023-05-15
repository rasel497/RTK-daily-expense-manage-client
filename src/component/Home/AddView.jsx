import axios from 'axios';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { loadList, setAddForm } from '../State/UseReducer';
import { useEffect, useState } from 'react';


const AddView = () => {
    const { updateUser } = useSelector((state) => state.lists);
    const { isEditing } = useSelector((state) => state.lists);
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState, formState: { errors } } = useForm();
    const [values, setValues] = useState();
    console.log('NewValues', values);

    // create api - get and show list of id history when click edit
    useEffect(() => {
        setValues(updateUser)
    }, [updateUser]);

    // after create api then you use reset click Edit btn set auto field values
    useEffect(() => { //firstly we checque my values have or not otherwise error undefined p. null
        if (values) {
            console.log('vlauesck', values)
            reset({
                date: values.date,
                purpose_title: values.purpose_title,
                type: values.deposit ? 'deposit' : 'expense',
                amount: values.deposit ? values.deposit : values.expense
            })
        }
    }, [values])

    // using it- Add amount form is submitSuccessful Go reset
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ date: '', purpose_title: '', type: 'select', amount: '' });
        }
    }, [formState, reset]);

    const handleFormSubmit = (data) => isEditing ? handleUpdatePost(data) : handleCreatePost(data);
    // const handleFormSubmit = (data) => {
    //     if (isEditing) {
    //         handleUpdatePost(data);
    //     } else {
    //         handleCreatePost(data);
    //     }
    // };

    // for update single list of form
    const handleUpdatePost = (data) => {
        console.log('isUpdate', data)
        axios.put(`http://localhost:5000/listUpdate/${values.id}`, data)
            .then(() => {
                // dispatch(setUpdate({ id: values.id, purpose_title: data.purpose_title, type: data.type, amount: values.amount }));
                dispatch(setAddForm());
                dispatch(loadList(true));
                // window.location.reload();
            })
            .catch((err) => console.log(err));
    };

    //successfully done
    const handleCreatePost = (data) => {
        console.log('Reeee', data);
        axios.post('http://localhost:5000/exphistorypost/', data)
            .then((res) => {
                dispatch(loadList(true));
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className='flex justify-center items-center rounded-md bg-cyan-600 my-10'>
            <div className='w-96 p-7'>
                {
                    isEditing ?
                        <h2 className='text-3xl font-bold text-white text-center mb-2'>Update amount</h2>
                        :
                        <h2 className='text-3xl font-bold text-white text-center mb-2'>Add amount</h2>
                }
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt  text-white">Select the date</span></label>
                        <input type="date" className='rounded-sm px-1'
                            {...register("date", { required: "Date is requred!" })}
                        />
                        {errors.date && <p className='text-yellow-300'>{errors.date?.message}</p>}
                    </div>

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
                            <option value="select">Select</option>
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