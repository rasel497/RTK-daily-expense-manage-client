import React from 'react';
import { useForm } from "react-hook-form";


const AddView = () => {
    // const { register, handleSubmit } = useForm();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='flex justify-center items-center rounded-md bg-cyan-600 my-10'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Add amount</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Expense title name</span></label>
                        <input type="name" placeholder='write expense title'
                            {...register("name", {
                                required: "Title name is requred!",
                                minLength: { value: 6, message: "Name must be 6 charcter or long!" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Name must have uppercase, number and special characters' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-yellow-400'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Expense pupose</span></label>
                        <select className="select select-info w-full max-w-xs">
                            <option disabled selected>Select</option>
                            <option>
                                Expense</option>
                            <option>
                                Deposit
                            </option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text-alt">Amount</span></label>
                        <input type='number' placeholder='write amount'
                            // pattern="[0-9]+(\.[0-9]+)?" using for float number praseFloate()
                            {...register("amount", { required: "Amount is required!" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.amount && <p className='text-red-600'>{errors.amount?.message}</p>}
                    </div>
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text text-sm font-medium">
                                Type of amount?
                            </span>
                        </label>
                        <div className='flex items-center'>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="radio-1"
                                    className="radio"
                                    value="deposit"
                                    {...register("role")}
                                // checked
                                />
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Deposit
                                    </span>
                                </label>
                            </div>
                            <div className="flex items-center ml-6">
                                <input
                                    type="radio"
                                    name="radio-1"
                                    className="radio"
                                    value="expense"
                                    {...register("role")}
                                />
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Expense
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <input className='btn btn-active btn-primary w-full mt-4' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddView;