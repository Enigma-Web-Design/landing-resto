import Image from 'next/image';

export default function Article({ foodBack }) {
  return (
    <section
      className={`w-full h-[70vh] bg-rose-100 text-black flex flex-col sm:flex-row  items-center border-b-gray-00 border-b`}
    >
      <div className="flex flex-col sm:w-1/2 w-full h-1/2 sm:p-[5vw] pt-5 sm:mt-0 sm:h-full justify-center text-center z-100 items-center ">
        <small className="font-bold text-base">OWNER</small>
        <h2 className="font-extrabold text-2xl sm:text-3xl mb-4">
          FRAN MATHERS
        </h2>
        <p className="leading-8 text-sm sm:text-lg font-medium sm:px-[3vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          necessitatibus aperiam nihil incidunt iure laborum similique
          doloremque, magnam totam sed nemo libero, velit adipisci natus fuga
          cumque dolorum quas doloribus.
        </p>
      </div>
      <div className=" flex sm:w-1/2 w-[55%] h-full justify-start items-end">
        <div>
          <Image
            className="z-5"
            width={600}
            height={60}
            src={foodBack}
            alt="owner"
          />
        </div>
      </div>
    </section>
  );
}
