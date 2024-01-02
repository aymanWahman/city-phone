import Image from 'next/image'
import data from '@/components/dataLetters'

export default function hardware() {
  return (
    <div className='mt-36'>
    

    
    <h2 className='text-center font-bold text-xl md:text-4xl mt-5 text-gray-400'>A sentence is a group of words</h2>

    {data && data.map((d) => (
    <main key={d.id} className="grid grid-cols-1 md:grid-cols-3 mb-3 items-center justify-between gap-2">

    <div className='my-5 ml-auto mr-auto'>
    <Image
      className="rounded shadow-2xl shadow-black"
      src={d.Photo}
      alt="Logo"
      width='260'
      height='130'
      priority
    />
    </div>
    
    <div className='col-span-2 p-3 md:mr-9 shadow-2xl shadow-black space-y-3 md:h-64 '>
    <h1 className='text-center font-bold text-lg md:text-2xl md:mt-8'>{d.Letter}</h1>
    <p className='text-center text-xl font-bold text-yellow-700'>{d.Word}</p>
    <p className='text-center text-xl font-bold text-blue-500'>{d.Sentence}</p>
    </div>
  
  
    
    </main>
   ))}


  </div>
  
  )
}
