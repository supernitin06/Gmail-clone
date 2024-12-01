import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useSelector, useDispatch } from 'react-redux';
import { setEmails, setOpen } from '../store/appslice'; // Adjust the import path according to your file structure
import axios from 'axios';

const SendEmail = () => {
    const [data, setData] = useState({
        to: "",
        subject: "",
        message: "",
    });
    const { emails } = useSelector(store => store.app);

    const dispatch = useDispatch();
    const open = useSelector((state) => state.app.open);

    // Handle input changes
    const setValue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const submitHandler = async (e) => {
        e.preventDefault();  
        
        const api = "http://localhost:3010/api/v1/email/create";
        try {
            const response = await axios.post(api, data, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
          
         dispatch(setEmails([...emails,response.data.email]));
            
        } catch (error) {
            console.log(error);
        }
    };

    // Handle closing the form
    const handleClose = () => {
        dispatch(setOpen(false));
    };

    return (
        <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
            <div className='flex items-center justify-between px-3 py-2 bg-[#F2F6FC] rounded-t-md'>
                <h1 className='text-lg font-semibold'>New Message</h1>
                <button
                    onClick={handleClose}
                    className='p-2 rounded-full hover:bg-gray-200'
                    aria-label="Close"
                >
                    <RxCross2 size="20px" />
                </button>
            </div>
            <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
                <input
                    onChange={setValue}
                    name='to'
                    value={data.to}
                    type="text"
                    placeholder='To'
                    className='outline-none py-2 px-3 border rounded-md focus:ring-2 focus:ring-blue-500'
                />
                <input
                    onChange={setValue}
                    name='subject'
                    value={data.subject}
                    type="text"
                    placeholder='Subject'
                    className='outline-none py-2 px-3 border rounded-md focus:ring-2 focus:ring-blue-500'
                />
                <textarea
                    onChange={setValue}
                    value={data.message}
                    name='message'
                    rows='10'
                    cols='30'
                    placeholder='Message'
                    className='outline-none py-2 px-3 border rounded-md focus:ring-2 focus:ring-blue-500'
                ></textarea>
                <button
                   onClick={handleClose}
                    className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full px-6 py-2 w-fit text-white font-semibold tracking-wider shadow-lg transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-red-500 hover:via-pink-500 hover:to-purple-400"
                    type="submit"
                >
                    Send
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-50 rounded-full blur-md animate-pulse"></span>
                </button>
            </form>
        </div>
    );
}

export default SendEmail;
