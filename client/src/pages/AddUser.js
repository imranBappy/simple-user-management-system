import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/user/Form';
import { usePostUserMutation } from '../features/users/usersApi';

const AddUser = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const [addUser, result] = usePostUserMutation({})

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        const { name, email, phone } = data;
        if (name && email && phone) {
            addUser(data);
        } else {
            console.log('Please fillup the form');
        }
    }
    return (
        <>
            <h1 className='
            text-center font-bold text-2xl py-5
            '>User Add Form</h1>

            <div className=' max-w-4xl m-auto my-5 '>
                <Link to='/' className=' py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'>
                    Views Users List
                </Link>
            </div>
            <Form handleSubmit={handleSubmit} data={data} handleChange={handleChange} />
        </>
    );
};

export default AddUser;