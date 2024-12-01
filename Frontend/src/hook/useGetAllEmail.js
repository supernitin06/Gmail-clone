import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../store/appslice";


const useGetAllEmails = () => {
    const dispatch = useDispatch();
    const { emails } = useSelector(store => store.app);

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const res = await axios.get("http://localhost:3010/api/v1/email/findEmails", {
                    withCredentials: true, // Include credentials for cross-origin requests
                });

                // Dispatch the emails to the Redux store
                dispatch(setEmails(res.data.emails));
            } catch (error) {
                console.log(error);
            }
        };

        fetchEmails();
    }, [emails]); // Add dispatch as a dependency

};

export default useGetAllEmails;