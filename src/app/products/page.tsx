import Image from 'next/image'
import products from '../../components/dataProducts';
import Link from 'next/link';

export const metadata = {
  title: "City Phone",
};

export default function Products() {

  return (
  <div className='mt-4'>

   <h5 className='text-center font-bold text-l md:text-2xl mt-2 text-blue-400'>Our Products</h5>

    <div className = "grid grid-cols-1 md:grid-cols-3  mb-3 items-center justify-between gap-1">
    {products && products.map((p) => (
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
    {/* <p className='text-center text-xl'>{p.description}</p> */}

  <div className='flex gap-1 mt-3 text-white text-center items-center justify-center'>  
    {/* <button className='bg-orange-600 rounded-xl p-2 m-4 w-full font-bold'>Add To Cart</button> */}
    
<button  className='bg-orange-600 rounded-xl p-2 m-4 w-full font-bold'><Link href={`/products/${p.id}`}>Show more</Link></button>
  

</div>

  </div>

    </>
   ))}
    </div>

  </div>
  )
}

