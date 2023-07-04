"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
export default function Navbar({ color }) {
  let [toggleNav, setToggleNav] = useState(false);

  let handleClick = () => {
    setToggleNav(!toggleNav);
  };

  const menu = useRef(null);

  useEffect(() => {
    // // only add the event listener when the dropdown is opened
    // if (!toggleNav) return;
    function Click(event) {
      if (menu.current && !menu.current.contains(event.target)) {
        setToggleNav(false);
      }
    }
    window.addEventListener("click", Click);
    // clean up
    return () => window.removeEventListener("click", Click);
  }, [toggleNav]);

  return (
    <div className="fixedMenu z-50 bottom-12 w-full ml-4 fixed">
      <div
        ref={menu}
        className={`navMenu overflow-hidden rounded-full relative w-96 flex`}
      >
        <button
          ref={menu}
          onClick={handleClick}
          id="nav-btn"
          className={`${
            toggleNav ? "rotate-90 " : ""
          } relative ease-in-out  duration-300 z-20 ${color} w-11 h-11 flex flex-col cursor-pointer justify-center items-center rounded-full`}
        >
          <div className="w-1.5 h-1.5 bg-black rounded-md my-0.5"></div>
          <div className="w-1.5 h-1.5 bg-black rounded-md my-0.5"></div>
          <div className="w-1.5 h-1.5 bg-black rounded-md my-0.5"></div>
        </button>

        <nav
          ref={menu}
          id="nav-menu"
          className={` ${
            toggleNav
              ? "visible opacity-100 delayOpacity left-1 duration-300"
              : "invisible opacity-0 left-[-300px] duration-200"
          } navLink w-80 z-10 ease-in-out ${color} flex rounded-full h-11 justify-around absolute items-center`}
        >
          <ul id="nav-list" className="navList flex font-bold font-josefin">
            <li>
              <Link onClick={handleClick} href="/#about">
                <button className="navBtn w-16 h-11 text-xs uppercase">
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} href={`/works`}>
                <button className="navBtn w-16 h-11 text-xs uppercase">
                  Works
                </button>
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} href={`/contact`}>
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
