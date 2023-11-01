import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  bottom-0 p-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between py-10">
        <div className="md:flex">
          <div className="left-content mx-4 md:mx-10">
            <h3 className="font-bold">Opciones adicionales:</h3>
            <ul className="list-none">
              <li className="my-2 md:my-4">Opción 1</li>
              <li className="my-2 md:my-4">Opción 2</li>
              <li className="my-2 md:my-4">Opción 3</li>
              <li className="my-2 md:my-4">Opción 4</li>
              <li className="my-2 md:my-4">Opción 5</li>
              <li className="my-2 md:my-4">Opción 6</li>
              <li className="my-2 md:my-4">Opción 7</li>
            </ul>
          </div>
          <div className="left-content mx-4 md:mx-10">
            <h3 className="font-bold">Opciones adicionales:</h3>
            <ul className="list-none">
              <li className="my-2 md:my-4">Opción 1</li>
              <li className="my-2 md:my-4">Opción 2</li>
              <li className="my-2 md:my-4">Opción 3</li>
              <li className="my-2 md:my-4">Opción 4</li>
              <li className="my-2 md:my-4">Opción 5</li>
              <li className="my-2 md:my-4">Opción 6</li>
            </ul>
          </div>
          <div className="left-content mx-4 md:mx-10">
            <h3 className="font-bold">Opciones adicionales:</h3>
            <ul className="list-none">
              <li className="my-2 md:my-4">Opción 1</li>
              <li className="my-2 md:my-4">Opción 2</li>
              <li className="my-2 md:my-4">Opción 3</li>
              <li className="my-2 md:my-4">Opción 4</li>
            </ul>
          </div>
        </div>
        <div className="right-content mb-10 md:mt-0 md:flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center md:items-start">
            <a href="/terminos" className="font-bold text-lg md:text-xl">
              CALL US
            </a>
            <a href="/terminos" className="font-bold text-3xl my-2">
              (xx)-xxx-xxx
            </a>
            <div className="my-10 mb-15">
              <p className="hover:outline-8 outline outline-4 py-2 px-4 text-center text-lg">
                Book a Table
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start mt-4 md:mt-0">
            <a href="/terminos" className="font-bold text-lg">
              Follow Us
            </a>
            <div className="flex mt-2">
              <a
                className="my-2 mr-2 border-2 p-1"
                href="https://www.facebook.com"
              >
                <FaFacebook />
              </a>
              <a
                className="my-2 mx-2 border-2 p-1"
                href="https://www.twitter.com"
              >
                <FaTwitter />
              </a>
              <a
                className="my-2 mx-2 border-2 p-1"
                href="https://www.instagram.com"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
