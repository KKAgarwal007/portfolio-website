'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'
import Image from 'next/image';
import project1 from '../../public/project1.png';
import project2 from '../../public/project2.png';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);
function Project() {
  const ContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ContainerRef.current,
        scroller: "body",
        markers:true,
        start: 'top 0%',
        end: 'bottom 100%',
        scrub: 2
      }
    },)
    tl.from('.box1', {
      x: -500,
      duration: 2,
      opacity: 0
    }, 'animal')
    tl.from('.box2', {
      x: 500,
      duration: 2,
      opacity: 0
    }, 'animal')
    tl.from('.box3', {
      x: -500,
      duration: 2,
      opacity: 0
    }, 'animal2')
    tl.from('.box4', {
      x: 500,
      duration: 2,
      opacity: 0
    }, 'animal2')
    // tl.from('.box5', {
    //   x: -500,
    //   duration: 2,
    //   opacity: 0
    // }, 'animal3')
    // tl.from('.box6', {
    //   x: 500,
    //   duration: 2,
    //   opacity: 0
    // }, 'animal3')
    // tl.from('.box7', {
    //   x: -500,
    //   duration: 2,
    //   opacity: 0
    // }, 'animal4')
    // tl.from('.box8', {
    //   x: 500,
    //   duration: 2,
    //   opacity: 0
    // }, 'animal4')
  })
  return (
    <div className='w-full min-h-screen bg-[#1A1B26] text-[#C0CAF5] pb-[30px] overflow-x-hidden' ref={ContainerRef}>
      <h1 className='p-10 text-[40px] uppercase'>Projects</h1>

    <div className='w-full min-h-[200px] p-10 flex items-center justify-between flex-wrap gap-[50px] mt-5 md:pt-[50px] pt-[400px]' >
      <div className='box1 w-[550px] h-[300px]  bg-black rounded-4xl cursor-pointer overflow-hidden relative'>
        <Image src={project1} alt='' className='w-full h-full object-fill'/>
        <Link href='https://github.com/KKAgarwal007/New/tree/main/Two-Good-Co' target='_blank' className='absolute top-0 bg-black opacity-0 text-white hover:opacity-45 w-full h-full flex justify-center items-center '>view on Github</Link>
      </div>

      <div className='box2 w-[550px] h-[300px]  bg-black rounded-4xl cursor-pointer overflow-hidden relative'>
        <Image src={project2} alt='' className='w-full h-full object-fill'/>
        <Link href='https://github.com/KKAgarwal007/New/tree/main/Wizard' target='_blank' className='absolute top-0 bg-black opacity-0 hover:opacity-45 text-white w-full h-full flex justify-center items-center'>view on Github</Link>
      </div>
{/* 
       <div className='box3 w-[550px] h-[300px]  bg-black rounded-4xl cursor-pointer overflow-hidden relative'>
        <Image src={project2} alt='' className='w-full h-full object-fill'/>
        <Link href='https://github.com/KKAgarwal007/New/tree/main/Wizard' target='_blank' className='absolute top-0 bg-black opacity-0 hover:opacity-45 text-white w-full h-full flex justify-center items-center'>view on Github</Link>
      </div>
      <div className='box4 w-[550px] h-[300px]  bg-black rounded-4xl cursor-pointer overflow-hidden relative'>
        <Image src={project2} alt='' className='w-full h-full object-fill'/>
        <Link href='https://github.com/KKAgarwal007/New/tree/main/Wizard' target='_blank' className='absolute top-0 bg-black opacity-0 hover:opacity-45 text-white w-full h-full flex justify-center items-center'>view on Github</Link>
      </div> */}
    </div>
    </div>
  )
}

export default Project