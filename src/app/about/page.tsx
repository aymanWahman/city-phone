import Image from "next/image";


const Page = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-5 mt-32 text-center items-center">

        <div className=" rounded-xl mx-auto text-center ">
          <Image
            className="rounded-xl mb-4 shadow-2xl shadow-black w-full"
            src="/img/logo.jpg"
            alt="Logo"
            width={280}
            height={140}
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
