"use client"
import Image from 'next/image';
import Link from 'next/link';
import { LanguageIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className='flex fixed top-0 w-full p-3 z-50 justify-between  rounded-b-2xl border border-orange-600 shadow-2xl '>
      
    <div className='flex bg-transparent items-center gap-2 md:gap-3 '>
      
    <Image
              src="/img/logo.jpg"
              alt="Logo"
              className='rounded-full'
              width={90}
              height={20}
              priority
            />
            <h1 className='font-extrabold text-l md:text-6xl text-blue-500 font-serif'>City Phone</h1>
    </div>

    <ul className='flex mr-3 gap-2 md:gap-9 items-center text-blue-500'>
    {/* <li className='text-xs md:text-xl '><Link href="/arbic"><LanguageIcon className="w-6 h-6" /></Link></li> */}
        <li className='text-xs md:text-xl '><Link href="/">Home</Link></li>
        <li className='text-xs md:text-xl '><Link href="/kids">Kids</Link></li>
        <li className='text-xs md:text-xl '><Link href="/about">About</Link></li>

        {theme === 'dark' 
        ? 
        (<button onClick={() => setTheme("light")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
          </button>) 
        : 
        (  <button onClick={() => setTheme("dark")}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
</svg>
          </button> )
        }
        
      

        </ul>
  
    </div>
  );
}

export default Header;


