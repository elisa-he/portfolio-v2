"use client";

import arrow from "public/Arrow.svg";
import Image from "next/image";
export default function Footer() {
  function scrollUp() {
    document.getElementById("logo").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <section className="footer p-6 z-0  flex text-xs justify-center relative items-end">
        <p className="footer  uppercase ">copyright by elisa</p>
        <Image
          className="arrow cursor-pointer z-0 absolute right-2.5 bottom-2.5"
          src={arrow}
          alt="arrow vector"
          onClick={scrollUp}
        />
      </section>
    </>
  );
}
