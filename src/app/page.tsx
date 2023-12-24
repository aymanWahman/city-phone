import Image from 'next/image'
import data from '../components/dataProducts';
import Slideshow from '../components/Slideshow';
import Products from './products/page';
export const metadata = {
  title: "City Phone",
};

export default function Home() {

  return (
  <div className='mt-36'>

   <div className='mx-5'>
    <h1 className=' text-center font-bold my-4 text-xl md:text-4xl'>Welcome to our city</h1>
    <p className='text-center'>Mobile Services</p>
   </div>

    
    <div className='items-center justify-center w-auto'>
    <Slideshow/>
   </div>
   
    <Products/>

  </div>
  )
}

