import React from 'react'
import AtithiList from './AtithiList'

function Admin() {
  return (
    <>
    <div className=' w-full z-10 h-10 bg-green-900 fixed'></div><div className=' h-10'></div>
        <div className=' grid grid-cols-[350px,calc(100%-350px)]'>
                <div className='h-screen m-0 bg-stone-700 text-white w-full p-8 relative '>
                    <div className=' h-fit bg-stone-700 text-white w-[350px] p-8 pt-12 fixed top-0 left-0'>
                        <h1>MSMEDOST Admin</h1>
                        <ul>
                            <div className=' bg-gray-500 px-4'>
                                <li>Member</li>
                                <p className=' hidden'>Member List</p>
                                <p className=' hidden'>Create Member</p>
                            </div>
                            <li>Atithi List</li>
                        </ul>
                    </div>
                </div>
                <div className=' w-full'><AtithiList/></div>
        </div>
    </>
  )
}

export default Admin