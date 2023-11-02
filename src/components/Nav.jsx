'use client';
import Image from 'next/image';
import yourResto from '../../public/your_logo.png';
import Button from '@/commons/Button';
import { useState } from 'react';

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav
      className={`bg-white   shadow-md flex w-full sm:p-4  text-black sticky top-0 z-100 backdrop-blur-sm bg-opacity-90  justify-end absolute`}
    >
      {isNavExpanded ? (
        ''
      ) : (
        <div className="mx-auto py-4 sm:hidden">
          {' '}
          <Image width={50} src={yourResto} alt="logo" />
        </div>
      )}

      <ul
        className={`sm:hidden flex flex-col  items-center justify-center w-full text-sm font-semibold ${
          isNavExpanded ? 'visible' : 'hidden'
        }`}
      >
        <li className="py-4">
          <Image width={50} src={yourResto} alt="logo" />
        </li>
        <li className="hover:text-green-700 cursor-pointer my-3">ABOUT</li>
        <li className="hover:text-green-700 cursor-pointer my-3">MENUS</li>
        <li className="hover:text-green-700 cursor-pointer my-3">LOREM</li>
        <li className="hover:text-green-700 cursor-pointer my-3">LOREM</li>
        <li className="hover:text-green-700 cursor-pointer my-3">LOREM</li>
        <li className="hover:text-green-700 cursor-pointer my-3">LOREM</li>
      </ul>
      <Button
        className={`block sm:hidden absolute py-[5vw] `}
        onClick={toggleNav}
      />
      <ul className="hidden sm:flex items-center justify-around w-full text-sm font-semibold sm:mx-24">
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
