import Image from 'next/image'
import data from '../components/dataProducts';
import Slideshow from '../components/Slideshow';

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

    
  

    <h2 className='text-center font-bold text-xl md:text-4xl mt-5 text-blue-400'>Our Products</h2>

    <div className = "grid grid-cols-1 md:grid-cols-3  mb-3 items-center justify-between gap-1">
    {data && data.map((p) => (
      <>
    <div key={p.id} className='my-5 ml-auto mr-auto border border-orange-600 rounded '>
    <Image
      className="rounded shadow-2xl shadow-black"
      src={p.image}
      alt="Logo"
      width={350}
      height={130}
      priority
    />
    <h1 className='text-center font-bold text-lg md:text-2xl mt-4'>{p.title}</h1>
    <p className='text-center text-xl'>{p.description}</p>

  <div className='flex gap-1 mt-3 text-white text-center items-center justify-center'>  
    <button className='bg-orange-600 rounded-xl p-2 m-4 w-full font-bold'>Add To Cart</button>
    <button className='bg-orange-600 rounded-xl p-2 m-4 w-full font-bold'>Show more</button>
  </div>

  </div>

    </>
   ))}
    </div>

  </div>
  )
}

