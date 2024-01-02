// import Image from 'next/image'
// import data from '../../components/dataProgramming'
import Link from 'next/link'

export default function Programming() {
  return (
    <div className='mt-36'>
      <div className='mx-5'>
  <h1 className='text-center font-bold my-4 text-xl md:text-4xl'>Welcome to City Kids</h1>

<h2 className='text-center text-xl md:text-4xl text-slate-600'>Programming</h2>
</div>

<div className='item-center justify-center mx-5 p-2 text-center'>
  <h2 className='text-center font-bold my-4 text-xl md:text-2xl text-red-600'>What is Computer Science?</h2>
  <p className='text-center my-4 text-lg md:text-xl text-green-800'>Computer science is the study of the theory, design, implementation of any algorithm, and performance of computer software and computer systems, including the study of computing itself.</p>
  <p className='text-center my-4 text-lg md:text-xl text-yellow-700'>علوم الكمبيوتر هي دراسة النظرية والتصميم وتنفيذ أي خوارزمية وأداء برامج الكمبيوتر وأنظمة الكمبيوتر، بما في ذلك دراسة الحوسبة نفسها</p>
  </div>

<div>
  <h2 className='text-center font-bold my-4 text-xl md:text-2xl text-green-800'>A Computer System is divided into two categories</h2>
    <p className='text-center my-4 text-lg md:text-xl text-yellow-700'>ينقسم نظام الكمبيوتر إلى فئتين</p>
</div>

  <div className='flex gap-8 items-center justify-center mb-5'>
    <Link href="/hardware"><button className="bg-orange-400 rounded text-xl font-bold p-5 m-5 md:w-52">Hardware</button></Link>
    <Link href="/software"><button className="bg-orange-400 rounded text-xl font-bold p-5 m-5 md:w-52">Software</button></Link>
  </div>

  <div>
    <h3 className='text-center my-4 font-bold text-green-600'>Computer science is fundamentally problem solving.</h3>
   <p className='text-center my-4 font-bold text-gray-500'>علوم الكمبيوتر هي في الأساس حل المشكلات</p>
  </div>

<div className='mb-5'>
  <h3 className='text-center my-4 font-bold text-green-600'>Four main problem solving steps</h3>
<ul className='md:flex gap-4 text-center items-center justify-center'>
  <li className='text-gray-500'>Understand the Problem</li>
  <li>فهم المشكلة</li>
  <li className='text-gray-500'>Design a Solution </li>
  <li>تصميم الحل</li>
  <li className='text-gray-500'>Implement your solution</li>
  <li>قم بتنفيذ الحل الخاص بك</li>
  <li className='text-gray-500'>Check your solution</li>
  <li>تحقق من الحل الخاص بك</li>
</ul>
</div>

  <div className='w-full '>
<iframe className='mx-auto w-60 md:w-92' src='city-kids-hardware.pdf' height="450"></iframe>
</div>

  </div>
  
  )
}
