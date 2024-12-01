import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
import { MdCropSquare, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLocalOffer, MdPeople } from "react-icons/md";
import { IoRefresh } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { GoTag } from "react-icons/go";
import { MdInbox } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Emails from './emails';


function Inbox() {
    const [selected, setSelected] = useState(0);
  

    const MailType = [
        { icon: <MdInbox size={'20px'} />, text: 'Primary' },
        { icon: <MdLocalOffer size={'20px'} />, text: 'Promotions' },
        { icon: <MdPeople size={'20px'} />, text: 'Social' },
    ];
    return (
        <>

            <div className='flex-1 items-center  bg-white  text-gray-700 '>
                <div className='flex justify-between' >
                    <div className='flex items-center  gap-3 mx-4'>

                        <div className='flex gap-1   items-center'>
                            <MdCropSquare size={'20px'} className='rounded-sm hover:bg-slate-300 hover:cursor-pointer' />
                            <FaCaretDown size={'10px'} className='rounded-sm  hover:bg-slate-300  hover:cursor-pointer' />
                        </div>
                        <div>
                            <IoRefresh size={'20px'} className='rounded-full  hover:bg-slate-300  hover:cursor-pointer' />
                        </div>
                        <div>
                            <PiDotsThreeOutlineVerticalFill size={'20px'} className='rounded-full  hover:bg-slate-300  hover:cursor-pointer' />
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>1 to 50</span>
                        <MdKeyboardArrowLeft size="24px" className='rounded-full  hover:bg-slate-300  hover:cursor-pointer' />
                        <MdKeyboardArrowRight size="24px" className='rounded-full  hover:bg-slate-300  hover:cursor-pointer' />
                    </div>
                </div>
                <div className="flex items-center border-b gap-2 border-gray-300 rounded-2xl my-4 overflow-hidden shadow-lg">
            {MailType.map((item, index) => (
                <button
                    key={index}
                    onClick={() => setSelected(index)}
                    className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition-all duration-300 rounded-3xl ${
                        selected === index
                            ? 'border-b-4 border-blue-600 shadow-inner bg-gray-100'
                            : 'hover:bg-gray-100 hover:shadow-md'
                    }`}
                >
                    <span className={`text-gray-700 ${selected === index ? 'text-blue-600' : ''}`}>
                        {item.icon}
                    </span>
                    <span className={`font-medium ${selected === index ? 'text-blue-600' : 'text-gray-700'}`}>
                        {item.text}
                    </span>
                </button>
            ))}
        </div>
                <div >
                <Emails/>
                </div>
                
  
</div>

            
        </>
    )
}

export default Inbox
