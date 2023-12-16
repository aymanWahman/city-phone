import Image from 'next/image'
import data from '../components/data';
import Slideshow from '../components/Slideshow';

export const metadata = {
  title: "City Phone",
};

export default function Home() {

  return (
  <div className='mt-36'>
    <div className='mx-5'>
  <h1 className='text-center font-bold my-4 text-xl md:text-4xl'>Welcome to our city</h1>

<p className='text-center'>Mobile Services</p>
</div>

<div className='items-center justify-center w-auto'>
  <Slideshow/>
</div>
    
    <h2 className='text-center font-bold text-xl md:text-4xl mt-5 text-blue-400'>Our Products</h2>

    {data && data.map((d) => (
    <main key={d.id} className="grid grid-cols-1 md:grid-cols-3 mb-3 items-center justify-between gap-2">

    <div className='my-5 ml-auto mr-auto'>
    <Image
      className="rounded shadow-2xl shadow-black"
      src={d.image}
      alt="Logo"
      width={360}
      height={130}
      priority
    />
    </div>
    
    <div className='col-span-2 p-3 md:mr-9 shadow-2xl shadow-black space-y-3 md:h-64 '>
    <h1 className='text-center font-bold text-lg md:text-2xl mt-4'>{d.title}</h1>
    <p className='text-center text-xl'>{d.description}</p>
    </div>
    
    
    </main>
   ))}

  </div>
  )
}

