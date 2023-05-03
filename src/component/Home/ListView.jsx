import React from 'react';

const ListView = () => {
    return (
        <div className="overflow-x-auto my-10">
            <table className="table w-full">
                {/* head*/}
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
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>05/03/2023</td>
                        <td>Cy Ganderton</td>
                        <td>500</td>
                        <td>0</td>
                        <td>
                            <button className="btn btn-sm bg-blue-500 mx-2">Edit</button>
                            <button className="btn btn-sm bg-red-600">Delete</button>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr className="active">
                        <th>2</th>
                        <td>05/03/2023</td>
                        <td>Support Technician</td>
                        <td>500</td>
                        <td>0</td>
                        <td>
                            <button className="btn btn-sm bg-blue-500 mx-2">Edit</button>
                            <button className="btn btn-sm bg-red-600">Delete</button>
                        </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>05/03/2023</td>
                        <td>Tax Accountant</td>
                        <td>0</td>
                        <td>750</td>
                        <td>
                            <button className="btn btn-sm bg-blue-500 mx-2">Edit</button>
                            <button className="btn btn-sm bg-red-600">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListView;