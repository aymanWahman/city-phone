import Image from "next/image";


const Page = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-5 mt-32 text-center items-center">

        

        <div className='items-center justify-center w-auto'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13642.322182721271!2d32.2741025871582!3d31.26003309999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99d3fbece40c7%3A0x929a3372f129f9d2!2z2LPZitiq2Yog2YHZiNmGIGNpdHkgcGhvbmU!5e0!3m2!1sen!2seg!4v1703821956170!5m2!1sen!2seg" 
        width="600" 
        height="450" 
        style={{marginRight: 'em'}} 
        // allowfullscreen="" 
        loading="lazy" 
        // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
   </div>

   <div className=" rounded-xl mx-auto text-center ">
          <Image
            className="rounded-xl mb-4 shadow-2xl shadow-black w-full"
            src="/img/logo.jpg"
            alt="Logo"
            width={480}
            height={90}
            priority
          />
        </div>
   
        
        <div className="col-span-3 w-full py-16 rounded-xl space-y-4 border-2 border-orange-600">
        
          <h2 className="text-2xl md:text-6xl font-bold mb-9 text-blue-200">City Phone</h2>
          <p className="text-xl md:text-2xl">Welcome to our city</p>
        
        </div>

      </div>

    </>
  );
};

export default Page;
