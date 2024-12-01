import React from 'react';
import { MdCropSquare, MdOutlineStarBorder } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Mail from './mail';
import { useDispatch } from 'react-redux';
import { setselected } from '../store/appslice';

function Email({ email }) { // Destructuring the email prop
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const openMail = () => {
        dispatch(setselected(email))
        navigate(`/mail/${email._id}`); // Navigating dynamically using email._id
    }

    return (
        <div onClick={openMail} className='flex justify-between border-gray-200 p-3 hover:bg-slate-300 hover:cursor-pointer'>
            <div className='flex items-center gap-2'>
                <div>
                    <MdCropSquare size={'20px'} />
                </div>
                <div>
                    <MdOutlineStarBorder size={'20px'} />
                </div>
                <div>
                    <h1 className='font-semibold'>{email?.subject}</h1>
                </div>
            </div>
            <div className='flex-1 ml-4'>
                {email?.message}
            </div>
            <div className='text-gray-500 text-sm'>
                <p>12 days ago</p> {/* You can dynamically render date here */}
            </div>
        </div>
    );
}

export default Email;
