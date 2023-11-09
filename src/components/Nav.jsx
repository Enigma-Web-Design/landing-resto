'use client';
import Image from 'next/image';
import yourResto from '../../public/your_logo.png';
import Button from '@/commons/Button';
import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav
      className={`bg-white absolute  shadow-md flex w-full sm:p-4  text-black sticky top-0  backdrop-blur-sm bg-opacity-90  justify-end  z-10`}
    >
      {isNavExpanded ? (
        ''
      ) : (
        <div className="mx-auto py-4 sm:hidden">
          <Link href={'/'}>
            <Image width={50} src={yourResto} alt="logo" />
          </Link>
        </div>
      )}

      <ul
        className={`sm:hidden flex flex-col  items-center justify-center w-full text-sm font-semibold ${
          isNavExpanded ? 'visible' : 'hidden'
        }`}
      >
        <li className="py-4">
          <Link href={'/'}>
            <Image width={50} src={yourResto} alt="logo" />
          </Link>
        </li>
        <Link href={'/'}>
          <li className="hover:text-green-700 cursor-pointer my-3">ABOUT</li>
        </Link>
        <Link href={'/'}>
          <li className="hover:text-green-700 cursor-pointer my-3">MENUS</li>
        </Link>
        <Link href={'/'}>
          <li className="hover:text-green-700 cursor-pointer my-3">
            PRIVATE ROOMS
          </li>
        </Link>
        <Link href={'/'}>
          <li className="hover:text-green-700 cursor-pointer my-3">LOREM</li>
        </Link>
        <Link href={'/'}>
          <li className="hover:text-green-700 cursor-pointer my-3">
            RESERVATIONS
          </li>
        </Link>
        <Link href={'/'}>
          <li className="hover:text-green-700 cursor-pointer my-3">
            CONTACT US
          </li>
        </Link>
      </ul>
      <Button
        className={`block sm:hidden absolute py-[3vw] `}
        onClick={toggleNav}
      />
      <ul className="hidden sm:flex items-center justify-around w-full text-sm font-semibold sm:mx-24">
        <Link href={'/'}>
          <li className="hover:text-green-700 cursor-pointer">ABOUT</li>
        </Link>
        <Link href={'/'}>
          <li className="hover:text-green-700 cursor-pointer">MENUS</li>
        </Link>
        <Link href={'/'}>
          <li className="hover:text-green-700 cursor-pointer">PRIVATE ROOMS</li>
        </Link>
        <li className="sm:mx-20 cursor-pointer">
          <Link href={'/'}>
            <Image width={50} src={yourResto} alt="logo" />
          </Link>
        </li>
        <Link href={'/'}>
          <li className="hover:text-green-700 cursor-pointer">LOREM</li>
        </Link>
        <Link href={'/reservations'}>
          <li className="hover:text-green-700 cursor-pointer">RESERVATIONS</li>
        </Link>
        <Link href={'/'}>
          <li className="hover:text-green-700 cursor-pointer">CONTACT US</li>
        </Link>
      </ul>
    </nav>
  );
}
