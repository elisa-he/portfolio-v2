"use client";

import arrow from "public/Arrow.svg";
import Image from "next/image";
export default function Footer() {
  function scrollUp() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <section className="footer p-6 pb-0 flex text-xs justify-center relative items-end">
        <p className="footer  uppercase ">copyright by elisa</p>
        <Image
          className="arrow animate-pulse cursor-pointer absolute right-2.5 bottom-2.5"
          src={arrow}
          alt="arrow vector"
          onClick={scrollUp}
        />
      </section>
    </>
  );
}
