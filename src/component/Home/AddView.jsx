import axios from 'axios';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { loadList, setLists, updateList } from '../State/UseReducer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const AddView = () => {
    const { id } = useParams()
    const { register, formState: { errors },
        handleSubmit, reset, formState, getValues, formState: { isDirty, isSubmitSuccessful } } = useForm({

            defaultValues: {
                purpose_title: "",
                deposit: "",
                expense: ""
            }
        });
    console.log('isDirty', isDirty);

    const { lists, setUpdate } = useSelector((state) => state.lists);
    const dispatch = useDispatch();

    const [selectedList, setSelectedList] = useState(null);
    const [purposeTitle, setPurposeTitle] = useState(lists.purpose_title);
    const [deposit, setDeposit] = useState(lists.deposit);
    const [expense, setExpense] = useState(lists.expense);
    // const [formListUpdate, setFormListUpdate] = useState(false);

    // reset
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                purpose_title: "ff",
                type: "expense",
                amount: 20,
            })
        }
    }, [formState, reset])
    //reset


    // create api - get and show list of id history when click edit..
    useEffect(() => {
        axios.get('http://localhost:5000/list/' + id)
            .then(res => {
                if (res.data[0]) {
                    setUpdate({
                        ...selectedList,
                        purpose_title: res.data[0].purpose_title,
                        deposit: res.data[0].amount,
                        expense: res.data[0].amount
                    })
                }
            })
            .catch(err => console.log(err))
    }, [lists]);


    // for update single list of form
    const handleUpdate = () => {

        const updatedList = {
            id: lists.id,
            purpose_title: purposeTitle,
            deposit: deposit,
            expense: expense
        };
        axios.put('http://localhost:5000/update/' + lists.id, updatedList)
            .then(res => {
                dispatch(setLists([...lists.filter(l => l.id !== lists.id), updateList]));
                setSelectedList(null);
            })
            .catch(err => console.log(err));
        reset();
    }

    // successfully done
    const handlePost = (data) => {
        console.log('Reeee', data);
        axios.post('http://localhost:5000/exphistorypost/', data)
            .then(res => {
                console.log(res);
                dispatch(loadList(true));
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='flex justify-center items-center rounded-md bg-cyan-600 my-10'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-white text-center mb-2'>Add amount</h2>
                {/* <form onSubmit={handleSubmit(handlePost)}> */}
                <form onSubmit={handleSubmit((handlePost) => {
                    reset();
                })}>
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
                    <button className='btn btn-active btn-primary w-full mt-4' type="submit"
                        onClick={() => { reset({ ...getValues(), purpose_title: "kkk", type: "", amount: 30 }); }}
                    >ADD</button>
                </form>
            </div>
        </div >
    );
};

export default AddView;