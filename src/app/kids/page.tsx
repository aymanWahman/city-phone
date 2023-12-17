import Image from "next/image";


const Page = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-5 p-5 rounded-xl items-center text-center mt-32">

        <div className=" rounded-xl">
          <Image
            className="rounded-xl shadow-2xl shadow-black w-full"
            src="/img/cityKids.png"
            alt="Logo"
            width={280}
            height={140}
            priority
          />
          <h2>Mobile</h2>
          <p>Comming soon</p>
        </div>

        <div>
        <Image
            className="rounded-xl shadow-2xl shadow-black w-full"
            src="/img/cityKids1.jpg"
            alt="Logo"
            width={280}
            height={140}
            priority
          />
          <h2>Programming</h2>
          <p>Comming soon</p>
        </div>

        <div>
        <Image
            className="rounded-xl shadow-2xl shadow-black w-full"
            src="/img/cityKids2.jpg"
            alt="Logo"
            width={280}
            height={140}
            priority
          />
          <h2>English</h2>
          <p>Comming soon</p>

        </div>

        <div>
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

        </div>

      </div>

    </>
  );
};

export default Page;
