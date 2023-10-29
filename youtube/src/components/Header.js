import React from 'react'

import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch= useDispatch();
  const toggleMenuHandler=()=>{
         dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
    <div className='flex col-span-1'>
    <img alt="menu" className="h-6 cursor-pointer  text-center" onClick={()=>toggleMenuHandler()} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"/>
        <img alt="youtube-logo" className="h-8 mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"/>
    </div>
       
       <div className='col-span-10 px-10'>
       <input type='search' className="w-1/2 border border-gray-400 p-2 rounded-l-full" />
        <button className='border border-gray-500 p-2 rounded-r-full'>🔍</button>
       </div>
       <div className='col-span-1'>
        <img className="h-7" alt="user-icon" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"/>
       </div>
       
    </div>
  )
}

export default Header