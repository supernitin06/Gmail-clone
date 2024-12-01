import React from 'react'
import { Outlet } from 'react-router-dom';
import Selectbar from './Selectbar'


function Body() {
    return (
        <div className="flex">
    <Selectbar/>
   <Outlet />
    </div>
    )
}

export default Body
