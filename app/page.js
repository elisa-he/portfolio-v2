"use client";
import Header from "./components/header";
import Footer from "./components/footer";
import logo from "public/eh.svg";
import Image from "next/image";
import Link from "next/link";
import { josefin, mulish } from "./fonts";
import about from "../json/about.json";
import nurseImg from "public/nurse.png";
import computerImg from "public/computer.png";
import { motion } from "framer-motion";
export default function Home() {
  const indoorHobby =
    about &&
    about.hobbyList[0].indoorHobby.map((hobby, i) => <li key={i}>{hobby}</li>);

  const outdoorHobby =
    about &&
    about.hobbyList[1].outdoorHobby.map((hobby, i) => <li key={i}>{hobby}</li>);

  return (
    <>
      <Header logo={logo} />
      <main className="font-mulish">
        <section className="top flex justify-center py-4 px-12">
          <div className="title">
            <p className={`text-6xl font-semibold my-16 ${josefin.className}`}>
              Hey, I'm
              <br />
              <span data-text="Elisa..." className="elisa relative text-white">
                Elisa...
              </span>
            </p>
          </div>
        </section>
        <section className="bottom flex justify-center text-xs flex-col items-center">
          <a
            href="#about"
            className="learnLink font-mulish text-main-color block font-light text-sm p-4"
          >
            Learn More
          </a>

          <div className="line h-[40rem] w-0 bg-main-color border border-solid border-main-color rounded-md opacity-30"></div>
        </section>
        <section id="about">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={{
              hide: {
                opacity: 0,
                // translateX: -100,
                transition: {
                  duration: 1,
                },
              },
              show: {
                opacity: 1,
                // translateX: 0,
                transition: {
                  delay: 0.3,
                  duration: 1,
                },
              },
            }}
            className={"firstRow noShow flex justify-center"}
          >
            <Image
              src={nurseImg}
              className="w-1/2 max-w-xs max-h-60 object-contain "
              alt="picture of a nurse"
            />
            <p className="firstDesc w-1/2 max-w-md p-2.5 my-auto mx-0 leading-relaxed text-sm">
              {about && about.description[0].desc}
            </p>
          </motion.div>

          <div className="line h-72 my-4 mx-auto w-0 bg-main-color border border-solid border-main-color rounded-md opacity-30"></div>

          <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={{
              hide: {
                opacity: 0,

                // translateX: 100,
                transition: {
                  duration: 1,
                },
              },
              show: {
                opacity: 1,

                // translateX: 0,
                transition: {
                  delay: 0.3,
                  duration: 1,
                },
              },
            }}
            className="secondRow noShow flex justify-center"
          >
            <div className="w-1/2 max-w-md">
              <p className="secondDesc p-2.5 my-auto mx-0 leading-loose text-sm">
                {about && about.description[1].desc}
              </p>
              <div className={`${josefin.className}`}>
                <Link
                  href={`/work`}
                  className="workBtn  mx-2.5 capitalize max-w-xs font-bold bg-black py-2 px-1 mt-2 text-white rounded-lg text-center w-full block"
                >
                  My Work
                </Link>
              </div>
            </div>
            <div className="w-1/2 h-1/2 max-w-xs object-contain my-auto mx-2.5">
              <Image src={computerImg} alt="person on computer" />
            </div>
          </motion.div>
        </section>
        <section className=" hobby flex flex-wrap justify-center pt-12 max-w-sm mx-auto">
          <div className="highlight flex justify-start ml-2.5 pt-7">
            <h2
              className={`${josefin.className} text-2xl font-semibold uppercase bg-gradient-to-b from-transparent from-50% to-main-color to-50% text-center px-2.5 m-0`}
            >
              What I Like To Do
            </h2>
          </div>
          <div className="contentWrap px-12  py-4 leading-loose text-sm">
            <p>
              On my free time, I like to play games when I'm in the indoor-sy
              mood:
            </p>
            <ul className="list-disc ml-10 mb-4">{indoorHobby}</ul>
            <p>In my outdoor-sy mood, I like to:</p>
            <ul className="list-disc ml-10">{outdoorHobby}</ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
