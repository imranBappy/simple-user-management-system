import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../components/user/Form';
import { useGetUserQuery, useUpdateUserMutation } from '../features/users/usersApi';
import Error from '../components/ui/Error';
import Title from '../components/ui/Title';
import NavBtn from '../components/ui/NavBtn';
import { toast } from 'react-toastify';


const initialState = {
    name: "",
    email: "",
    phone: ""
}
const EditUser = () => {

    let { userId } = useParams();
    const [data, setData] = useState(initialState);
    const { data: userData, isError, isLoading } = useGetUserQuery(userId);
    const [editUser, { status }] = useUpdateUserMutation()
    let navigate = useNavigate();

    useEffect(() => {
        if (status === 'fulfilled') {
            toast.success("User successfully edited!")
            return navigate("/");
        } else if (status === 'rejected') {
            toast.error("There was an error!")
        }
    }, [status, navigate])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, phone } = data;
        const newUser = { name, email, phone, _id: userData._id }
        if (name && email && phone) {
            editUser(newUser);
        } else {
            toast.warning("Please fill up the form with valid data.")
        }
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
            <Title title={'Edit Form'} />
            <NavBtn to={'/'} label={' Views Users List'} />
            <div className=' container '>
                {content}
            </div>
        </>
    );
};

export default EditUser;