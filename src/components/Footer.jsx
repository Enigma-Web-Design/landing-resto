const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 absolute bottom-0 w-full h-3/6 flex flex-row py-20 justify-center">
      <div className="flex mr-20">
        <div className="left-content mx-10">
          <h3 className="font-bold"> Opciones adicionales:</h3>
          <ul className="list-disc pl-4">
            <li className="my-4">Opción 1</li>
            <li className="my-4">Opción 2</li>
            <li className="my-4">Opción 3</li>
            <li className="my-4">Opción 4</li>
            <li className="my-4">Opción 5</li>
            <li className="my-4">Opción 6</li>
            <li className="my-4">Opción 7</li>
          </ul>
        </div>
        <div className="left-content mx-10">
          <h3 className="font-bold">Opciones adicionales:</h3>
          <ul className="list-disc pl-4">
            <li className="my-4">Opción 1</li>
            <li className="my-4">Opción 2</li>
            <li className="my-4">Opción 3</li>
            <li className="my-4">Opción 4</li>
            <li className="my-4">Opción 5</li>
            <li className="my-4">Opción 6</li>
          </ul>
        </div>
        <div className="left-content mx-10">
          <h3 className="font-bold">Opciones adicionales:</h3>
          <ul className="list-disc pl-4">
            <li className="my-4">Opción 1</li>
            <li className="my-4">Opción 2</li>
            <li className="my-4">Opción 3</li>
            <li className="my-4">Opción 4</li>
          </ul>
        </div>
      </div>
      <div className="right-content mx-20   justify-between flex flex-col">
        <div className="flex flex-col justify-center  ">
          <a href="/terminos" className="font-bold text-l">
            CALL US
          </a>
          <a href="/terminos" className="font-bold text-3xl">
            {"("}xx{")"}-xxx-xxx
          </a>
        </div>

        <div className="mb-5">
          <p className="border border-4 py-5 px-10 text-center">book a table</p>
        </div>

        <div className="flex flex-col justify-center  ">
          <a href="/terminos" className="font-bold ">
            Follow Us
          </a>
          <div className="">
            <a className="mr-2" href="https://www.facebook.com">
              Facebook
            </a>
            <a className="mr-2" href="https://www.twitter.com">
              Twitter
            </a>
            <a className="mr-2" href="https://www.instagram.com">
              Instagram
            </a>
          </div>
        </div>
        <div>&copy; 2023 Mi Sitio Web</div>
      </div>
    </footer>
  );
};

export default Footer;
