import Image from "next/image";
import yourResto from "../../public/your_logo.png";
export default function Nav() {
  return (
    <nav className="bg-white  flex w-full p-2 text-black sticky top-0 z-100 backdrop-blur-sm bg-opacity-90 ">
      <ul className="flex items-center justify-around w-full text-sm font-semibold sm:mx-24">
        <li className="hover:text-green-700 cursor-pointer">ABOUT</li>
        <li className="hover:text-green-700 cursor-pointer">MENUS</li>
        <li className="hover:text-green-700 cursor-pointer">LOREM</li>
        <li className="sm:mx-20 cursor-pointer">
          <Image width={50} src={yourResto} alt="logo" />
        </li>
        <li className="hover:text-green-700 cursor-pointer">LOREM</li>
        <li className="hover:text-green-700 cursor-pointer">LOREM</li>
        <li className="hover:text-green-700 cursor-pointer">LOREM</li>
      </ul>
    </nav>
  );
}
