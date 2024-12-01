import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();  
        const api = "http://localhost:3010/api/v1/user/register";
        try {
            const response = await axios.post(api, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            navigate("/login");
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex items-center justify-center w-screen h-screen bg-gray-100'>
            <form 
                onSubmit={submitHandler} 
                className='flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md'
            >
                <h2 className='text-2xl font-semibold mb-4 text-center'>Sign Up</h2>
                <input
                    name='username'
                    onChange={changeHandler}
                    value={input.username}
                    type='text'
                    placeholder='Username'
                    className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                    name='email'
                    onChange={changeHandler}
                    value={input.email}
                    type='email'
                    placeholder='Email'
                    className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                    name='password'
                    onChange={changeHandler}
                    value={input.password}
                    type='password'
                    placeholder='Password'
                    className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button
                    type="submit"
                    className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200'
                >
                    Sign Up
                </button>
                <p className='mt-4 text-gray-600'>
                    Already have an account?
                    <Link
                        to="/login"
                        className='text-blue-600 hover:text-blue-800 ml-1 font-semibold'
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Signup;
