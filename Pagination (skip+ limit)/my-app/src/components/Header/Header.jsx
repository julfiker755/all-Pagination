import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io';
const Header = () => {
    const [mobile,setmobile]=useState(true)
    const [sub,subset]=useState(true)
  
    return (
        <div className='bg-[#2f3c4b]'>
           <div className='container mx-auto flex justify-between items-center py-3 px-4 lg:px-0'>
               <div className='text-4xl font-extrabold'>Medilab</div>
              <div className='flex space-x-4'>
              <ul className='space-x-3 items-center hidden lg:flex relative text-white'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer' onClick={(event) => {
    setmobile(!mobile);
    event.stopPropagation();
  }}><span className='flex items-center space-x-2'>Departments <IoIosArrowDown/></span>
                <ul className={`${mobile ? 'hidden':'absolute bg-[#2f3c4b] px-10 space-y-px py-3 rounded-r-md rounded-l-md'}`}>
                    <li className='!cursor-pointer'>Drop Down 1</li>
                    <li>Drop Down 2</li>
                    <li onClick={()=>subset(!sub)}><span className='flex items-center'>Deep Drop Down 3 <IoIosArrowDown/></span>
                    <ul className={sub ? 'hidden':'bg-[#2f3c4b] ml-4 px-10 py-1'}>
                        <li>Deep Drop Down 1</li>
                        <li>Deep Drop Down 2</li>
                        <li>Deep Drop Down 3</li>
                        <li>Deep Drop Down 4</li>
                    </ul>
                    </li>
                    <li>Drop Down 4</li>
                    <li>Drop Down 5</li>
                    <li>Drop Down 6</li>
                </ul>                
                </li>
                <li  className='cursor-pointer'>Departments</li>
                <li className='cursor-pointer'>Doctors</li>
                <li className='cursor-pointer'>Contact</li>
               </ul>
               <button className='bg-[#023B6D] text-white font-bold py-2 px-3 rounded-full hover:bg-[#1d66a5] hover:transition-[1s] text-sm lg:text-base'>Make an Appointment</button>
               <div onClick={()=>setmobile(!mobile)} className='items-center flex cursor-pointer lg:hidden'>{mobile ? <AiOutlineMenu size={20}/>:<FaTimes size={20}/>}</div>
              </div>
           </div>
        </div>
    );
};

export default Header;