import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CiCircleQuestion, CiSearch } from 'react-icons/ci';
import { TbGridDots } from 'react-icons/tb';
import Avatar from 'react-avatar';
import { IoIosSettings } from 'react-icons/io';
import { useSelector } from 'react-redux';

function Navbar() {
  const use = useSelector((state)=>state.app.user)
  const user =use;
  return (
    <>
      <div className='flex items-center justify-between px-6 h-16 bg-[#F9FAFB] shadow-md'>
        {/* Left Section */}
        <div className='flex items-center gap-6'>
          <div className='p-3 hover:bg-gray-200 rounded-full cursor-pointer transition-colors duration-300'>
            <RxHamburgerMenu size={24} />
          </div>
          <img className='w-10' src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png' alt='Gmail Logo' />
          <h1 className='font-semibold text-2xl text-gray-700'>Gmail</h1>
        </div>

        {/* Center Search Bar */}
        {
          user && (
            <>
            <div className='w-[40%]'>
          <div className='flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm transition-all duration-300 hover:shadow-md'>
            <CiSearch size={20} className='text-gray-500' />
            <input
              type='text'
              placeholder='Search mail'
              className='w-full bg-transparent px-3 py-1 text-gray-700 outline-none'
            />
          </div>
        </div>

        {/* Right Section */}
        <div className='flex items-center gap-6'>
          <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer transition-all duration-300'>
            <CiCircleQuestion size={24} />
          </div>
          <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer transition-all duration-300'>
            <IoIosSettings size={24} />
          </div>
          <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer transition-all duration-300'>
            <TbGridDots size={24} />
          </div>
          <div className='p-1'>
          <Avatar 
                src={user.profilephoto}    // The URL of the user's profile photo
                size="35"                   // The size of the avatar in pixels
                textSizeRatio={1.75}        // Adjusts the text size within the avatar (if using text fallback)
                round={true}                // Makes the avatar round
            />
          </div>
        </div>
            </>
          )
        }
       
      </div>
    </>
  );
}

export default Navbar;
