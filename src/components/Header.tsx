"use client"
import Image from 'next/image';
import Link from 'next/link';
// import { LanguageIcon } from '@heroicons/react/24/solid'

import DarkModeToggle from './DarkModeToggle';
const Header = () => {
  return (
    <div className='flex fixed top-0 w-full p-3 z-50 justify-between  rounded-b-2xl border border-orange-500 shadow-2xl '>
      
    <div className='flex bg-transparent items-center gap-2 md:gap-3 '>
      
    <Image
              src="/img/logo.jpg"
              alt="Logo"
              className='rounded-full'
              width={90}
              height={20}
              priority
            />
            <h1 className='font-extrabold text-xl md:text-6xl text-blue-500 font-serif'>City Phone</h1>
    </div>

    <ul className='flex mr-3 gap-2 md:gap-9 items-center text-blue-500'>
    {/* <li className='text-xs md:text-xl '><Link href="/arbic"><LanguageIcon className="w-6 h-6" /></Link></li> */}
        <li className='text-xs md:text-xl '><Link href="/">Home</Link></li>
        <li className='text-xs md:text-xl '><Link href="/kids">Kids</Link></li>
        <li className='text-xs md:text-xl '><Link href="/about">About</Link></li>
      <DarkModeToggle/>
        </ul>
  
    </div>
  );
}

export default Header;
