'use client'
// 'use strict'


import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/24/solid';
import {Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {
  const images = [
    "img/headPhone1.jpg",
    "img/headPhone2.jpg",
    "img/cover.jpg",
    "img/headPhone.jpg",
    "img/charger.jpg",
    "img/fixed.jpg",
    "img/cover1.jpg",
    "img/chargerHeat.jpg",
    "img/chargerInkax.jpg",
    "img/powerBank.jpg"
  ]

  const ZoomInProperties = {
    scale:1,
    duration: 5000,
    transitionDuration: 300,
    infinity: true,
    prevArrow:(
      <div className='ml-40 top-60 md:top-92 '>
        <ArrowLeftIcon className='h-8 w-8 text-white cursor-pointer' />
      </div>
    ),
    nextArrow:(
      <div className='mr-40 top-60 md:top-92'>
        <ArrowRightIcon className='h-8 w-8 text-white cursor-pointer' />
      </div>
    )
  }
  return (
    <div className='mt-5 w-full'>
    <Zoom {...ZoomInProperties}>
      {images.map((each, index) => (
        <div key={index} className='flex justify-center md:items-center items-start w-screen relative shadow-2xl '>
          <img className='w-screen md:w-10/12 h-96 rounded-md border-2 border-blue-400' src={each}/>
        <h1 className='absolute md:top-60 top-24 inset-x-1/4 text-center z-10  text-2xl md:text-4xl bold text-white'></h1>
        <p className='absolute md:top-80 top-40 inset-x-1/4 text-center z-10 text-xs md:text-xl bold text-white'>Everything you can imagine is real</p>
        </div>
      ))}
    </Zoom>
    </div>
  );
}

export default Slideshow;
