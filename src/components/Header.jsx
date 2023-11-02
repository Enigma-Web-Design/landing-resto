"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCube } from "swiper/modules";

// Import Swiper styles
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css";
const Header = () => {
  // Rutas de las imágenes del slider
  const images = ["/vip.jpg", "/vip.jpg", "/vip.jpg", "/vip.jpg"];

  return (
    <>
      <div className="flex flex-col items-center justify-center  absolute text-white z-[-1] w-full h-[670px] xl:h-[640px] lg:h-[600px] md:h-[540px] sm:h-[500px]  color-white-800">
        <h1 className="text-[70px]  sm:text-[90px] font-bold">WELCOME</h1>
        <h2>to the oasis of the lunch</h2>
        <button className="mt-10 font-bold border p-2 px-20 border-4 outline outline-white outline-4 border-transparent duration-100 hover:border-white ">
          BOOK A TABLE
        </button>
      </div>
      <header className="h-[670px] xl:h-[640px] lg:h-[600px] md:h-[540px] sm:h-[500px]  relative z-[-2] bg-white-900 overflow-hidden">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          autoplay
          modules={[EffectCube, Pagination, Autoplay]}
          className=""
          speed={1000}
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full  h-[670px] xl:h-[640px] lg:h-[600px] md:h-[540px] sm:h-[500px] bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </header>
    </>
  );
};

export default Header;
