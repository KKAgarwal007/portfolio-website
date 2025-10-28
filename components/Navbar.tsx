'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {
  const navigator = useRouter();
  const path = usePathname();
  return (
    <div className='w-full h-[70px] bg-[#1F2233] text-[#C0CAF5] border-b border-[#2A2D3E] flex'>
        <div onClick={()=>{
          navigator.push('/');
        }} className={`w-[50%] h-full border-r border-black flex justify-center items-center cursor-pointer text-lg sm:text-2xl ${path == '/'?" text-[#C0CAF5] bg-[#7B5FFF]  transition duration-300": ""}`}>
            <a href="/">Home</a>
        </div>
        <div onClick={()=>{
          navigator.push('/project')
        }} className={`w-[50%] h-full border-r border-black flex justify-center items-center cursor-pointer text-lg sm:text-2xl ${path == '/project'?" text-[#C0CAF5] bg-[#7B5FFF] transition duration-300": ""}`}>
            <a href="/project">Projects</a>
        </div>
    </div>
  )
}

export default Navbar