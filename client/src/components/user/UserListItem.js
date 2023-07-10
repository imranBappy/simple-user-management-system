import React from 'react';
import { Link } from 'react-router-dom';
import { useDeleteUserMutation } from '../../features/users/usersApi';

const UserListItem = (props) => {
    const { id, name, _id } = props;

    const [deleteUser, result] = useDeleteUserMutation()
    const handleDelete = () => {
        deleteUser(_id)
    }
    return (
        <tr className=' bg-white'>
            <td className='border   border-spacing-3 px-5 py-2 '>
                <Link to={`/${_id}`}>
                    {id + 1}
                </Link>
            </td>
            <td className='border   border-spacing-3 px-5 py-2 '><Link to={`/${_id}`}>
                {name}
            </Link></td>
            <td className='border   border-spacing-3 px-5 py-2 w-60 '>
                <Link to={`/edit/${_id}`}>
                    <button className='shadow-md border-2 border-green-600 rounded-md py-1 px-3 text-green-600  mr-3 hover:shadow-xl  '>
                        Edit
                    </button>
                </Link>
                <button onClick={handleDelete} className='shadow-md border-2 border-red-600 rounded-md
                            py-1 px-3
                            text-red-600
                            hover:shadow-xl
                            '>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default UserListItem;