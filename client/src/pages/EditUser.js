import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Form from '../components/user/Form';
import { useGetUserQuery, useUpdateUserMutation } from '../features/users/usersApi';
import Error from '../components/ui/Error';


const initialState = {
    name: "",
    email: "",
    phone: ""
}
const EditUser = () => {

    let { userId } = useParams();
    const [data, setData] = useState(initialState);
    const { data: userData, isError, isLoading } = useGetUserQuery(userId);
    const [editUser, result] = useUpdateUserMutation()

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        const newUser = { ...data, _id: userData._id }
        editUser(newUser);
    }

    useEffect(() => {
        const { name, email, phone } = userData || initialState;
        setData({ name, email, phone })
    }, [userData])

    let content = null;
    if (isLoading) {
        content = <div className='my-5 text-center'>Loading...</div>
    } else if (isError) {
        content = <Error message="There was an error!" />
    } else if ((!isLoading && !isLoading) && userData) {
        content = <Form handleSubmit={handleSubmit} data={data} handleChange={handleChange} />
    } else {
        content = <div className='my-5 text-center'>User Not Found!</div>
    }

    return (
        <>
            <h1 className='
            text-center font-bold text-2xl py-5
            '>Edit Form</h1>

            <div className=' max-w-4xl m-auto my-5 '>
                <Link to='/' className=' py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'>
                    Views Users List
                </Link>
                {content}
            </div>

        </>
    );
};

export default EditUser;