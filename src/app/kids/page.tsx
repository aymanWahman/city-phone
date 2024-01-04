import Image from "next/image";
import Link from "next/link";


const Page = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-5 p-5 rounded-xl text-center text-yellow-600 mt-32">

        {/* <div className=" rounded-xl">
        <Link href="/mobile">
          <Image
            className="rounded-xl shadow-2xl shadow-black w-full"
            src="/img/cityKids1.jpg"
            alt="Logo"
            width={280}
            height={140}
            priority
          />
          </Link>
          <h2 className="mt-5">Mobile</h2>
          
        </div> */}

        <div className="mx-auto">
        <Link href="/programming">
        <Image
            className="rounded-xl shadow-2xl shadow-black w-96"
            src="/img/cityKids.png"
            alt="Logo"
            width={280}
            height={140}
            priority
          />
            </Link>
          <h2 className="mt-5">Programming</h2>
        </div>


        <div className="mx-auto">
        <Link href="/letters">
        <Image
            className="rounded-xl shadow-2xl shadow-black w-96"
            src="/img/cityKids2.jpg"
            alt="Logo"
            width={280}
            height={140}
            priority
          />
        </Link>
      
        
          <h2 className="mt-5">English</h2>

        </div>

        {/* <div>
        <Image
            className="rounded-xl shadow-2xl shadow-black w-full"
            src="/img/cityKids4.jpg"
            alt="Logo"
            width={280}
            height={140}
            priority
          />
          <h2>Arbic</h2>
          <p>Comming soon</p>

        </div> */}

      </div>

    </>
  );
};

export default Page;
