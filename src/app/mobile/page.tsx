import Image from 'next/image'
import data from '../../components/dataMobile'

export default function Mobile() {
  return (
    <div className='mt-36'>
    <div className='mx-5'>
  <h1 className='text-center font-bold my-4 text-xl md:text-4xl'>Welcome to City Kids</h1>

<h2 className='text-center text-xl md:text-4xl text-blue-900'>Mobile</h2>
</div>

    
    <h2 className='text-center font-bold text-xl md:text-4xl mt-5 text-blue-400'>How do you use Mobile?</h2>

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
