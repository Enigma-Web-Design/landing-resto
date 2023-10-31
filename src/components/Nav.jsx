import Image from 'next/image';
import yourResto from '../../public/your_logo.png';
export default function Nav() {
  return (
    <nav className="bg-white flex w-full p-2 text-black">
      <ul className="flex items-center justify-around w-full text-sm font-semibold">
        <li className="hover:text-yellow-400">ABOUT</li>
        <li className="hover:text-yellow-400">MENUS</li>
        <li className="hover:text-yellow-400">LOREM</li>
        <li>
          <Image width={80} src={yourResto} alt="logo" />
        </li>
        <li className="hover:text-yellow-400">LOREM</li>
        <li className="hover:text-yellow-400">LOREM</li>
        <li className="hover:text-yellow-400">LOREM</li>
      </ul>
    </nav>
  );
}
