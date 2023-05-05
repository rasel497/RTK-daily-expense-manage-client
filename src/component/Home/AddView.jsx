import axios from 'axios';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { loadList } from '../State/UseReducer';


const AddView = () => {
    const lists = useSelector(state => state.lists)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const dispatch = useDispatch();


    console.log('lists...', lists)
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
                <form onSubmit={handleSubmit(handlePost)}>

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
                    <input className='btn btn-active btn-primary w-full mt-4' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddView;