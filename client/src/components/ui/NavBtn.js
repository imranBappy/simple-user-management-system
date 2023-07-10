import React from 'react';
import { Link } from 'react-router-dom';

const NavBtn = ({ to, label }) => {
    return (
        <div className='max-w-4xl m-auto my-5 '>
            <Link to={to} className=' nav_btn'>
                {label}
            </Link>
        </div>
    );
};

export default NavBtn;