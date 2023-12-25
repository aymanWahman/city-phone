import Image from 'next/image'
import data from '@/components/dataProducts';
import Link from 'next/link';

export const metadata = {
  title: "City Phone",
};

export default function productDetails({params} : {
  params: {productDetails: string}
}) {

  return (
  <div className='mt-36'>

   <div className='mx-5' >
    <h1 className=' text-center font-bold my-4 text-xl md:text-4xl'>Welcome to our city</h1>
    <h2 className='text-center font-bold text-xl md:text-4xl mt-5 text-blue-400'> Product</h2>
    {/* <h2 className='text-center font-bold text-xl md:text-4xl mt-5 text-blue-400'> {params.productDetails}</h2> */}
    
   </div>

  

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
    <p className='text-center text-xl'>{p.price}</p>

  <div className='flex gap-1 mt-3 text-white text-center items-center justify-center'>  
    <button className='bg-orange-600 rounded-xl p-2 m-4 w-full font-bold'><Link href="/">Go Home</Link></button>
  </div>

  </div>

    </>
   ))}
    </div>

  </div>
  )
}

