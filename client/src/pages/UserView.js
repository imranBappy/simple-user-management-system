import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetUserQuery } from '../features/users/usersApi';
import Error from '../components/ui/Error';

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
            <h1 className='
            text-center font-bold text-2xl py-5
            '>User Information</h1>
            <div className='max-w-4xl m-auto'>
                <Link to='/' className='  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'>
                    View All User List
                </Link>
            </div>
            <div className=' max-w-4xl m-auto shadow-md my-5 '>
                {content}
            </div>
        </div>
    );
};

export default ViewUser;