import React, { useState } from 'react'
import AtithiList from './AtithiList'
import { FaUser } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import MemberList from './MemberList';
import Dashboard from './Dashboard';

function Admin() {
    
    const [toggle, setToggle] = useState(true)
    const [activeSection, setActiveSection] = useState("dashboard")
    
    const handleToggle = ()=>{
        setToggle(!toggle)
    }


  return (
    <>
        <div className=' grid grid-cols-[250px,calc(100%-250px)]'>
                <div className='h-screen m-0 bg-stone-700 text-white w-full relative ' >
                    <div className=' h-full bg-[rgb(17,32,48)] text-white w-[250px] fixed top-0 left-0'>
                        <div className=' bg-sky-900 h-20 flex justify-center items-center gap-4 font-semibold'>
                        <div className='text-3xl p-3 bg-white text-slate-700 rounded-full'>
                            <FaUser />
                        </div>
                            <h1>MSMEDOST <br /> Admin</h1>
                        </div>
                        <img src="https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg" className=' -z-10 absolute h-full opacity-10' alt="" />
                        <ul className=' ml-10 mt-6 flex flex-col gap-4 z-30'>
                           
                                <li onClick={()=>setActiveSection("dashboard")}>Dashboard</li>
                                <li className=' flex items-center gap-1 cursor-pointer' onClick={handleToggle}>Member <span className=" text-[0.6rem] mt-1">
                                <BiSolidDownArrow />
                                </span>
                                </li>
                                <div className={`${!toggle ? "hidden" : ""} border-l-[0.5px] pl-3`}>
                                    <p onClick={()=>setActiveSection("member")} className=' flex items-center gap-2 mb-3 cursor-pointer'><MdKeyboardDoubleArrowRight />Member List </p>
                                    <p className=' flex items-center gap-2'><MdKeyboardDoubleArrowRight />Create Member</p>
                                </div>
                            
                            <li onClick={()=>setActiveSection("atithi")} className=' cursor-pointer'>Atithi List</li>
                        </ul>
                    </div>
                </div>
                
                {activeSection === "dashboard" && <Dashboard />}
                {activeSection === "member" && <MemberList />}
                {activeSection === "atithi" && <AtithiList />}
                
        </div>
    </>
  )
}

export default Admin