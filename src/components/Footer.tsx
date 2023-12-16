// import Link from 'next/link';

const Footer = () => {
  return (
    <div className='justify-center bg-transparent rounded-t-xl border-2 border-orange-500 shadow-2xl w-full'>
    <h3 className="text-blue-600 font-bold text-2xl text-center mt-3">Mohamed Eltrabely</h3>  

        <div className='flex gap-x-2 md:gap-x-6 text-sm md:text-xl p-5 justify-center  items-center'>
      
  <div className=" flex gap-2 md:gap-6  justify-center items-center text-xs md:text-xl p-1">
  <p className="text-blue-400 font-bold "> Tel: +201223513535</p>  
  <p className="text-blue-400 font-bold "> Email: mohamed-eltrabely.com</p>  
    </div>
    
    </div>
    <div><p className='text-xs text-center text-gray-300'>Designed and developed by Ayman Aly</p></div>
    </div>
    
  );
}

export default Footer;
