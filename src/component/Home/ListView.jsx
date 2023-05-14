import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList, setLists, setUpdate, setIsEditingForm } from '../State/UseReducer';
import { Link } from 'react-router-dom';


const ListView = () => {
    const { lists, loadList } = useSelector((state) => state.lists);
    const dispatch = useDispatch();
    // we can use raect daypicker
    const date = new Date();
    const currentDate = date.getDate() + '/' + (date.getMonth() + 1) + "/" + date.getFullYear();

    // handleEdit
    const handleEdit = (id) => {
        const selected = lists.find((list) => list.id === id);
        console.log('selected', selected);
        dispatch(setUpdate(selected));
        dispatch(setIsEditingForm());
    }

    // set all users in table
    useEffect(() => {
        if (loadList) {
            axios.get('http://localhost:5000/allexpensedata/')
                .then(res => {
                    console.log(res.data)
                    dispatch(setLists(res.data))
                })
                .catch(err => console.log(err))
        }
    }, [loadList]);

    // delete list of history
    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/deleteone/' + id)
            .then(res => {
                console.log(res);
                dispatch(deleteList({ id: id }))
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="overflow-x-auto my-10">
            <h2 className='text-xl font-bold text-black my-1'>Expense History</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Purpose Title</th>
                        <th>Deposit</th>
                        <th>Expense</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.from(lists).map((list, index) => {
                            return <tr key={index.id}>
                                <td>{list.id}</td>
                                <td>{currentDate}</td>
                                <td>{list.purpose_title}</td>
                                <td>{list.deposit}</td>
                                <td>{list.expense}</td>
                                <td>
                                    <Link onClick={() => handleEdit(list.id)} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                    <Link onClick={() => handleDelete(list.id)} className='btn btn-sm bg-red-600 mx-2'>Delete</Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div >
    );
};

export default ListView;