import React from 'react';
import { MdArrowBack, MdArchive, MdReport, MdDelete, MdMailOutline, MdFolderOpen, MdMoreVert } from 'react-icons/md';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';
import {  useNavigate , useParams  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {  toast } from 'react-hot-toast'; 

function Mail() {
    const navigate = useNavigate();
    const params = useParams();
    const { Selectedmail } = useSelector(store => store.app);
  
const deleteHandler = async () => {
    try {
        const res = await axios.delete(`http://localhost:3010/api/v1/email/${params.id}`, {
            withCredentials: true
        });
        toast.success(res.data.message);
        navigate('/')
    } catch (error) {
        console.error(error);
        toast.error('Failed to delete the email');
    }
};
    return (
        <div className='flex-1 bg-white h-[100vh]'>
            <div className="flex justify-between items-center p-4 border-b border-gray-300 shadow-md bg-gray-50">
                <div className="flex items-center gap-3 text-gray-700">
                    <div
                        onClick={() => navigate("/")}
                        className="hover:bg-gray-200 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                    >
                        <MdArrowBack size={'24px'} />
                    </div>
                    <div className="hover:bg-gray-200 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <MdArchive size={'24px'} />
                    </div>
                    <div className="hover:bg-gray-200 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <MdReport size={'24px'} />
                    </div>
                    <div onClick={deleteHandler} 
                    className="hover:bg-gray-200 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <MdDelete size={'24px'} />
                    </div>
                    <div className="hover:bg-gray-200 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <MdMailOutline size={'24px'} />
                    </div>
                    <div className="hover:bg-gray-200 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <MdFolderOpen size={'24px'} />
                    </div>
                    <div className="hover:bg-gray-200 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <MdMoreVert size={'24px'} />
                    </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                    <p>2 of 11,037</p>
                    <div className="hover:bg-gray-200 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <IoMdArrowDropleft size={'24px'} />
                    </div>
                    <div className="hover:bg-gray-200 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                        <IoMdArrowDropright size={'24px'} />
                    </div>
                </div>
            </div>

            <div className='h-[90vh] overflow-y-auto p-6 bg-gray-100'>
                <div className='bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105'>
                    <div className='flex justify-between items-center mb-4'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-2xl font-semibold text-gray-800'>{Selectedmail?.subject}</h1>
                        </div>
                        <div className='text-gray-400 text-sm'>
                            <p>12 days ago</p>
                        </div>
                    </div>

                    <div className='text-gray-600 text-sm mb-4'>
                        <h1 className='font-medium'>{Selectedmail?.to}</h1>
                        <span className='text-gray-500'>to me</span>
                    </div>

                    <div className='text-gray-700'>
                        <p>{Selectedmail?.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mail;
