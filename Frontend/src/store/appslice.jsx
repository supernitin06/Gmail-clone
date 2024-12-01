import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        open: false,
        user: null,
        emails: [],
        Selectedmail : null,
    },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setuser: (state, action) => {
            state.user = action.payload;
        },
        setEmails: (state, action) => {
            state.emails = action.payload;
        },
        setselected: (state, action) => {
           state.Selectedmail = action.payload;
        },
    },
});

export const { setOpen, setuser, setEmails , setselected} = appSlice.actions;
export default appSlice.reducer;
