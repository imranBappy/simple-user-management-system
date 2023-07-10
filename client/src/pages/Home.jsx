import React from 'react';
import UserList from '../components/user/UserList';

const Home = () => {
    return (
        <div className='w-full'>
            <h1 className='
            text-center font-bold text-2xl py-5
            '>User Management System</h1>

            <UserList />
        </div>
    );
};

export default Home;