import React from 'react';
import Inbox from "./Component/Inbox";
import Navbar from "./Component/Navbar";
import Selectbar from "./Component/Selectbar";
import Body from "./Component/body";
import Mail from "./Component/mail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SendEmail from './Component/sendemail';
import Signup from './Component/signup';
import Login from './Component/login';
import { Toaster } from 'react-hot-toast';


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Body />,
      children: [
        {
          path: "/", // Path for Inbox
          element: <Inbox />,
        },
        {
          path: "/mail/:id", // Path for Mail
          element: <Mail/>,
        }
      ]},
      {
       path: "/login", // Path for
       element: <Login/>
      },
      {
       path: "/signup", // Path for
       element:<Signup/>
      },
    
  ]);

  return (
    <div className="bg-[#F9FAFB] h-screen">
      <Navbar />
      <RouterProvider router ={router} />
      <div className='absolute w-[30%] bottom-0 right-20 z-10'>
  <SendEmail/>
</div>
<Toaster/>

    </div>
  );
}
