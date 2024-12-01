import React from 'react';
import { GoPencil } from "react-icons/go";
import { IoMdStar } from 'react-icons/io';
import { MdInbox, MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { setOpen } from '../store/appslice';

function Selectbar() {
    const dispatch = useDispatch();

    // Function to handle the button click
    const handleComposeClick = () => {
        dispatch(setOpen(true));
    };

    const menuItems = [
        {
            icon: <MdInbox size={'20px'} />,
            title: "Inbox"
        },
        {
            icon: <IoMdStar size={'20px'} />,
            title: "Starred"
        },
        {
            icon: <MdOutlineWatchLater size={'20px'} />,
            title: "Snoozed"
        },
        {
            icon: <TbSend size={'20px'} />,
            title: "Sent"
        },
        {
            icon: <MdOutlineDrafts size={'20px'} />,
            title: "Drafts"
        },
        {
            icon: <MdOutlineKeyboardArrowDown size={'20px'} />,
            title: "More"
        },
    ];

    return (
        <div className='w-[20%] h-[100vh] bg-gray-50 p-4 shadow-md'>
            <div className='mb-6'>
                <button
                    onClick={handleComposeClick} // Pass the function reference
                    className='flex items-center p-3 gap-3 hover:shadow-lg bg-[#1a73e8] text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105'
                >
                    <GoPencil size={'20px'} /> Compose
                </button>
            </div>
            <div className='text-gray-600'>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className='pl-4 flex items-center rounded-full gap-3 py-2 my-2 hover:cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:translate-x-2'
                    >
                        {item.icon}
                        <p className='font-medium'>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Selectbar;
