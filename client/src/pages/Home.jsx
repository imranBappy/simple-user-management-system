import React from 'react';
import UserList from '../components/user/UserList';
import NavBtn from '../components/ui/NavBtn';
import Title from '../components/ui/Title';

const Home = () => {
    return (
        <div className='w-full'>
            <Title title={'User Management System'} />
            <NavBtn to={'/add'} label={'  Add User'} />
            <UserList />
        </div>
    );
};

export default Home;