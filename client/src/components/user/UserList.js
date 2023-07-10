import React from 'react';
import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../../features/users/usersApi';
import Error from '../ui/Error';
import UserListItem from './UserListItem';

const UserList = () => {
    const { data, isError, isLoading } = useGetUsersQuery({})
    let content = null;
    if (isLoading) {
        content = <div className='my-5 text-center'>Loading...</div>
    } else if (isError) {
        content = <Error message="There was an error!" />
    } else if ((!isLoading && !isLoading) && data.length > 0) {
        content =
            <table className="table-auto w-full border-collapse border   ">
                <thead>
                    <tr className=' bg-white'>
                        <th className=' text-start px-5 py-3 '>ID</th>
                        <th className=' text-start px-5 py-3 '>Name</th>
                        <th className=' text-start px-5 py-3 '>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((user, index) => <UserListItem id={index} key={user._id} {...user} />)}
                </tbody>
            </table>
    } else {
        content = <div className=' py-10 text-center'>User Not Found!</div>
    }


    return (
        <>
            <div className=' max-w-4xl m-auto mb-5 '>
                <Link to='/add' className=' py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'>
                    Add User
                </Link>
            </div>
            <div className=' max-w-4xl m-auto shadow-md my-5 '>
                {content}
            </div>
        </>
    );
};

export default UserList;