"use client";

export default function HeaderReservation () {
  // Rutas de las imágenes del slider
  const image = [
    "mainslider.jpg",
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center  absolute text-white z-[1] w-full h-[670px] xl:h-[640px] lg:h-[600px] md:h-[540px] sm:h-[500px]  color-white-800">
        <h1 className="text-[40px]  sm:text-[90px] font-bold">RESERVATIONS</h1>
        <h2>The best of the best.</h2>
        <button className="mt-10 bg-[#b28442] text-white font-bold border p-2 px-20 border-4 outline outline-white outline-4 border-transparent duration-100 hover:border-white ">
          FIND A TABLE
        </button>
      </div>
      <header className="h-[670px] xl:h-[640px] lg:h-[600px] md:h-[540px] sm:h-[500px]  relative z-[0] bg-white-900 overflow-hidden">

              <div
                className="w-full  h-[670px] xl:h-[640px] lg:h-[600px] md:h-[540px] sm:h-[500px] bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
        
      </header>
    </>
  );
};
