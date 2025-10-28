
import React from 'react'
import image from '../public/image.jpeg'
import Image from 'next/image'
function Home() {
  return (
    <div className='w-full  h-[calc(100vh-70px)] pt-[100px] bg-[#1A1B26] text-[#C0CAF5] flex'>
       <div className='w-[50%] flex flex-col justify-center items-center mx-auto'>
        <div>
          <h1 className='text-[40px] font-semibold'>Hi, I'm <span className='text-[#7B5FFF]'>Karan Kumar Agarwal</span></h1>
          <h2 className='text-[32px] text-[#C0CAF5]'>Full Stack Web Developer</h2>
          <p className='text-wrap max-w-[500px] my-3 leading-5 text-[17px] text-[#C0CAF5]'>I create modern, responsive, and user-friendly web experiences using the MERN stack — MongoDB, Express, React, and Node.js.</p>
          <button className='bg-[#7B5FFF] py-2 px-5 text-white p-3 rounded-lg cursor-pointer mt-5 hover:bg-[#6d4cff] transition-all hover:-translate-y-1'>Contact Me</button>
        </div>
       </div>
       <div className='w-[50%] h-full flex justify-center items-center'>
          <div className='max-w-[400px] w-full h-[400px] bg-[#7B5FFF] rounded-full overflow-hidden blur-2xl relative'>
          </div>
           <div className='max-w-[400px] w-full h-[400px] bg-[#7B5FFF] rounded-full overflow-hidden shadow-[#7B5FFF] absolute'>
              <Image src={image} alt='' className='w-full h-full object-cover rounded-full'/>
          </div>
       </div>
    </div>
  )
}

export default Home