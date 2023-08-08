import React, { useState } from 'react';
import './Navber.css'
import { BiMenu } from 'react-icons/bi';
import { TiTimes } from 'react-icons/ti';
import { BiChevronDown } from 'react-icons/bi';



const Navber = () => {
    const [mobile,setmobile]=useState(true)
    const [sub,setsub]=useState(true)
     function handlemobile(){
        setmobile(!mobile)
        document.querySelector('.navber-main-center').classList.toggle('navber-main-center-add')
        
     }
    //  hanldesub
    function handlesub(e){
        e.stopPropagation()
        document.querySelector('.sub-main-menu').classList.toggle('sub-main-menu-open-sub')
    }
    return (
        <nav className='bg-[#1b3166ec] w-full'>
            <div className='container m-auto navber-main'>
            <div><h1 className='logo-text'><span>D</span>emo</h1></div>
            <ul className='navber-main-center'>
                <div className='lg:hidden my-[6px] mx-[10px]'><h1 className='logo-text'><span>D</span>emo</h1></div>
                <li><a href="#">Home</a></li>
                <li onClick={(e)=>handlesub(e)} className='sub-main'><a href="#">Pages</a><BiChevronDown size={26} />
                <ul className='sub-main-menu'>
                    <li><a href="">page sub1</a></li>
                    <li><a href="">page sub2</a></li>
                    <li><a href="">page sub3</a></li>
                    <li><a href="">page sub3</a></li>
                    <li><a href="">page sub3</a></li>
                    <li><a href="">page sub3</a></li>
                </ul>
                </li>
                <li><a href="#">Services</a></li>
                <li><a href="#">projects</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div onClick={()=>handlemobile()} className='mobile-tab lg:hidden'>{mobile ? <BiMenu size={26}/>:<TiTimes size={26}/> }</div>
        </div>
        </nav>
    );
};


export default Navber;