
export default function BookATable() {

  return (
    <>
      <section className="h-[670px] xl:h-[640px] lg:h-[600px] md:h-[540px] sm:h-[500px]  relative  bg-white overflow-hidden">
        <div className="flex text-center flex-col items-center justify-center  absolute text-black w-full h-[670px] xl:h-[640px] lg:h-[600px] md:h-[540px] sm:h-[500px]  color-white-800">
          <h1 className="text-xl  sm:text-5xl font-bold mb-8">BOOK A TABLE</h1>
          <h2 className="w-3/4 sm:w-2/5  mb-20">
            You may make a reservation any time online or by calling (973) 650
            9001 during our hours of operation:
          </h2>

          <h2 className=" sm:text-2xl">Hours of Operation:</h2>
          <div className="flex">
            <div className="flex flex-col items-start m-6">
              <h2>Monday: </h2>
              <h2>Tuesday - Friday: </h2>
              <h2>Saturday: </h2>
              <h2>Sunday: </h2>
            </div>

            <div className="flex flex-col items-start m-6">
              <h2>Close</h2>
              <h2>5pm - 9pm</h2>
              <h2>5pm - 11pm</h2>
              <h2>11am - 9pm</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
