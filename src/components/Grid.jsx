export default function Grid() {
  return (
    <div className="flex flex-wrap lg:w-[1000px] sm:w-full mx-auto justify-center my-24">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
          <div
            className="h-40 md:h-48 bg-cover bg-center  mb-4"
            style={{
              backgroundImage: `url('/vip.jpg')`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}
