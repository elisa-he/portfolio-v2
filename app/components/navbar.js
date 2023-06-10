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
    <div className="fixedMenu top-12 w-full ml-4 fixed">
      <div
        className={`navMenu overflow-hidden rounded-full relative w-96 flex`}
      >
        <button
          onClick={handleClick}
          className={`${
            toggleNav ? "rotate-90 " : ""
          } relative ease-in-out  duration-300 z-10 bg-main-color w-11 h-11 flex flex-col cursor-pointer justify-center items-center rounded-full`}
        >
          <div className="w-1.5 h-1.5 bg-black rounded-md my-0.5"></div>
          <div className="w-1.5 h-1.5 bg-black rounded-md my-0.5"></div>
          <div className="w-1.5 h-1.5 bg-black rounded-md my-0.5"></div>
        </button>

        <nav
          className={` ${
            toggleNav
              ? "visible opacity-100 delayOpacity left-1 duration-300"
              : "invisible opacity-0 left-[-300px] duration-300"
          } navLink w-80 z-0 ease-in-out bg-main-color flex rounded-full h-11 justify-around absolute items-center`}
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
