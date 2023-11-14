export default function ContactInfo({ text, textmode, title }) {
  return (
    <div
      className={
        " mx-auto flex flex-col sm:w-1/2  px-[5vw] py-20 sm:mt-0 relative top-[-100px] justify-center  z-[1] items-center bg-gray-100 text-black  border-solid border-gray-200 border-2 " +
        textmode
      }
    >
      <h2 className="font-extrabold text-2xl sm:text-3xl mb-4">
        {title || "Phone: xxx-xxx-xxx"}
      </h2>
      <div className="leading-8 text-sm sm:text-lg font-medium px-[3vw] sm:px-0">
        {text || (
          <>
            <p>Facebook: yourResto_facebook</p>
            <p>Instagram: yourResto_instagram</p>
            <p>Twitter: yourResto_twitter</p>
            <p>Addres: yourRestoAdress 991</p>
            <p>Hotmail: yourResto@example.com</p>
          </>
        )}
      </div>
    </div>
  );
}
