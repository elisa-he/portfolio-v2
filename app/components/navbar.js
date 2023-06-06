"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  let [toggleNav, setToggleNav] = useState(false);

  let handleClick = () => {
    setToggleNav(!toggleNav);
    console.log("it is clicked");
  };
  return (
    <div className="fixedMenu bottom-[8%] w-full ml-4 fixed">
      <div className={`navMenu  w-96 flex`}>
        <button
          onMouseEnter={handleClick}
          onMouseLeave={handleClick}
          className="relative  z-10 bg-main-color w-11 h-11 flex flex-col cursor-pointer justify-center items-center rounded-full"
        >
          <div className="w-1.5 h-1.5 bg-black rounded-md my-0.5"></div>
          <div className="w-1.5 h-1.5 bg-black rounded-md my-0.5"></div>
          <div className="w-1.5 h-1.5 bg-black rounded-md my-0.5"></div>
        </button>

        <nav
          className={` ${
            toggleNav
              ? "visible ease-in-out left-0 duration-300"
              : "invisible duration-200"
          } navLink left-[-100px] z-0 w-80 bg-main-color flex rounded-full h-11 justify-around absolute items-center`}
        >
          <ul className="navList flex font-bold font-josefin">
            <li>
              <Link href="/#about">
                <button className="navBtn w-16 h-11 text-xs uppercase">
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link href={`/work`}>
                <button className="navBtn w-16 h-11 text-xs uppercase">
                  Works
                </button>
              </Link>
            </li>
            <li>
              <Link href={`/contact`}>
                <button className="navBtn w-16 h-11 text-xs uppercase">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
