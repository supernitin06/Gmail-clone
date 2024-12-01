import React from 'react';
import Email from './Email';
import { useSelector } from 'react-redux';
import useGetAllEmails from '../hook/useGetAllEmail'; // Fixed import path

const Emails = () => {
    useGetAllEmails(); // Custom hook to fetch emails

    const { emails } = useSelector(store => store.app); // Selecting emails from Redux store

    return (
        <div>
            {emails && emails.map((email) => (
                <Email key={email._id} email={email} /> // Passing email as prop
            ))}
        </div>
    );
};

export default Emails;
