"use client";
import React, { useRef, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { josefin, mulish } from "../fonts";
import logo from "/public/eh.svg";
import Image from "next/image";
import Link from "next/link";

//import JSON
import works from "/json/work.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
export default function Works() {
  return (
    <div>
      <Header logo={logo} />

      <main
        id="work"
        className="tablet:h-[80vh] h-[75vh] tablet:flex tablet:flex-col tablet:justify-center"
      >
        <div className="highlight flex justify-center tablet:m-0 mt-12 tablet:pb-8 pt-7">
          <h2
            className={`${josefin.className} tablet:text-4xl text-3xl font-bold uppercase bg-gradient-to-b from-transparent from-50% to-main-color to-50% text-center px-2.5 m-0`}
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
          className="mySwiper w-9/12 mt-8 mb-8 "
        >
          {works &&
            works.map((work, i) => {
              return (
                <div key={i + 50} className="">
                  <SwiperSlide key={work.title} className="">
                    <div className="h-[280px] relative  px-2">
                      <Link href={`works/${work?.title}`}>
                        <div className="mb-8 h-[280px] relative">
                          <Image
                            className={`w-full object-left-top object-cover brightness-50 `}
                            src={work?.image}
                            fill
                            alt="homepage of websites"
                          />
                        </div>
                        <div className=" absolute bg-gray-50 py-8  w-full bottom-0 text-black ">
                          <h3 className=" font-josefin text-lg uppercase  pl-1  ">
                            {work.title}
                          </h3>

                          {/* <ul className="flex items-center">
                            {work?.usedSkill.slice(0, 3).map((skill, i) => (
                              <li
                                key={i}
                                className="work skill font-josefin text-md capitalize px-1"
                              >
                                {skill}
                              </li>
                            ))}
                          </ul> */}
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
        </Swiper>
      </main>

      <Footer />
    </div>
  );
}
