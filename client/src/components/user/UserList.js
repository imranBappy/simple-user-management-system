import React from 'react';
import { useGetUsersQuery } from '../../features/users/usersApi';
import Error from '../ui/Error';
import UserListItem from './UserListItem';
import Loading from '../ui/Loading';

const UserList = () => {
    const { data, isError, isLoading } = useGetUsersQuery({})
    let content = null;
    if (isLoading) {
        content = <Loading />
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
            <div className='container shadow-none'>
                {content}
            </div>
        </>
    );
};

export default UserList;