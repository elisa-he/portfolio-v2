"use client";
import React, { useRef, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { josefin, mulish } from "../fonts";
import logo from "public/eh.svg";
import Image from "next/image";
import Link from "next/link";

//import JSON
import works from "/json/work.json";

// Images
import capstone from "public/capstone.gif";
import bingewatch from "public/bingewatch.gif";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
export default function Works() {
  const [hover, setHover] = useState("brightness-50");
  return (
    <div>
      <Header logo={logo} />
      <main className="h-[75vh]">
        <div className="highlight flex justify-center  mt-12 pt-7">
          <h2
            className={`${josefin.className} text-3xl font-bold uppercase bg-gradient-to-b from-transparent from-50% to-main-color to-50% text-center px-2.5 m-0`}
          >
            Works
          </h2>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"1"}
          breakpoints={{
            360: {
              // width: 576,
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1024: {
              // width: 768,
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper mt-8 mb-8 "
        >
          {works &&
            works.map((work, i) => {
              return (
                <div key={i + 1} className="">
                  <SwiperSlide key={work.title}>
                    <div className="">
                      <Link href={`works/${work?.title}`} className="relative">
                        <Image
                          className={`w-full object-left-top object-cover h-[313px] ${hover} transition ease-in-out duration-300`}
                          src={work?.image}
                          width={500}
                          height={500}
                          alt="capstone homepage"
                        />
                        <div className="flex pt-4 justify-between">
                          <h3 className=" font-josefin text-md uppercase text-black pl-1 ">
                            {work.title}
                          </h3>
                          <ul className="flex items-center">
                            {work?.usedSkill.slice(0, 3).map((skill, i) => (
                              <li
                                key={i}
                                className="skill font-josefin text-sm capitalize px-1"
                              >
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          {/* <SwiperSlide className="w-full">
            <Link href={`works/${works[1]?.title}`}>
              <Image
                className="w-full object-left-top object-cover h-[313px]"
                src={capstone}
                alt="capstone homepage"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={`works/${works[1]?.title}`}>
              <Image
                className="w-full object-left-top object-cover h-[313px]"
                src={bingewatch}
                alt="movie homepage"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={`works/${works[1]?.title}`}>
              <Image
                className="w-full  object-left-top object-cover h-[313px] "
                src={capstone}
                alt="capstone homepage"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={`works/${works[1]?.title}`}>
              <Image
                className="w-full object-left-top object-cover h-[313px]"
                src={capstone}
                alt="capstone homepage"
              />
            </Link>
          </SwiperSlide> */}
        </Swiper>
      </main>
      <Footer />
    </div>
  );
}
