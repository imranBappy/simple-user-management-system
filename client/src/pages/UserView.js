import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../features/users/usersApi';
import Error from '../components/ui/Error';
import Title from '../components/ui/Title';
import NavBtn from '../components/ui/NavBtn';

const ViewUser = () => {
    let { userId } = useParams();
    const { data: userData, isError, isLoading } = useGetUserQuery(userId);
    const { name, email, phone } = userData || {};

    let content = null;
    if (isLoading) {
        content = <div className='my-5 text-center'>Loading...</div>
    } else if (isError) {
        content = <Error message="There was an error!" />
    } else if ((!isLoading && !isLoading) && userData) {
        content = <>
            <h1 className=' text-center font-bold text-xl py-3 '>
                {name}
            </h1>
            <p className='text-center'>{email}</p>
            <p className='text-center pb-5'>{phone}</p>
        </>
    } else {
        content = <div className='my-5 text-center'>User Not Found!</div>
    }

    return (
        <div className='w-full'>
            <Title title={'User Information'} />
            <NavBtn to={'/'} label={' Views Users List'} />
            <div className=' container '>
                {content}
            </div>
        </div>
    );
};

export default ViewUser;