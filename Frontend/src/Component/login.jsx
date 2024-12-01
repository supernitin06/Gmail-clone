import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  toast } from 'react-hot-toast'; // Import ToastContainer and toast
import { useDispatch } from 'react-redux';
import { setuser } from '../store/appslice';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const changeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const api = "http://localhost:3010/api/v1/user/login";
        try {
            const response = await axios.post(api, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            dispatch(setuser(response.data.user)); 
            navigate('/')
            toast.success(response.data.message); 
            // Fixed typo here
          // Redirect to dashboard or any other route after login

        } catch (error) {
            toast.error("Login failed. Please check your credentials."); // Show error notification
        }
    };

    return (
        <div className='flex items-center justify-center w-screen h-screen bg-gray-50'>
            <form
                onSubmit={submitHandler}
                className='flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-sm transform transition-transform hover:scale-105'
            >
                <h1 className='font-bold text-3xl text-center text-blue-700 mb-4'>Login</h1>

                <input
                    name='email'
                    onChange={changeHandler}
                    value={input.email}
                    type='email'
                    placeholder='Email'
                    className='border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform'
                />
                <input
                    name='password'
                    onChange={changeHandler}
                    value={input.password}
                    type='password'
                    placeholder='Password'
                    className='border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform'
                />
                <button
                    type="submit"
                    className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105'
                >
                    Login
                </button>
                <p className='mt-4 text-gray-600'>
                    Don't have an account?
                    <Link
                        to="/signup"
                        className='text-blue-600 hover:text-blue-800 ml-1 font-semibold'
                    >
                        Sign Up
                    </Link>
                </p>
            </form>
          
        </div>
    );
}

export default Login;
