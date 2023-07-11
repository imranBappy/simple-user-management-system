import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/user/Form';
import { usePostUserMutation } from '../features/users/usersApi';
import Title from '../components/ui/Title';
import NavBtn from '../components/ui/NavBtn';
import { toast } from 'react-toastify';

const AddUser = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const [addUser, { status, isLoading }] = usePostUserMutation({})
    let navigate = useNavigate();
    useEffect(() => {
        if (status === 'fulfilled') {
            toast.success("User successfully added!")
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
        if (name && email && phone) {
            addUser(data);
        } else {
            toast.warning("Please fill up the form with valid data.")
        }
    }
    return (
        <>
            <Title title={'User Add Form'} />
            <NavBtn to={'/'} label={'Views Users List'} />
            <Form isLoading={isLoading} handleSubmit={handleSubmit} data={data} handleChange={handleChange} />
        </>
    );
};

export default AddUser;