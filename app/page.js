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
      <main className="font-mulish ">
        <div className="container max-w-full snap-mandatory snap-y h-screen w-screen overflow-auto ">
          <section className="  snap-start">
            <Header logo={logo} />
            <div className="title flex justify-center  pt-16 px-12">
              <p className={`text-9xl font-semibold mt-8 ${josefin.className}`}>
                Hey, I'm
                <br />
                <span
                  data-text="Elisa..."
                  className="elisa relative text-white"
                >
                  Elisa...
                </span>
              </p>
            </div>
            <div className=" text-xs  flex justify-center flex-col items-center">
              <a
                href="#about"
                className="learnLink uppercase font-mulish text-main-color block font-light text-base p-4"
              >
                Web Developer
              </a>

              <div className="line h-[40vh] tablet:h-[60vh]  w-0 bg-main-color border border-solid border-main-color rounded-md opacity-30"></div>
            </div>
          </section>

          <section className=" mb-12 p-4 snap-always  snap-center " id="about">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className={
                "firstRow opacity-0 noShow flex justify-center tablet:mt-80"
              }
            >
              <Image
                src={nurseImg}
                className="w-1/2 max-w-xs max-h-60 object-contain "
                alt="picture of a nurse"
              />
              <p className="firstDesc w-1/2 max-w-md p-2.5 my-auto mx-0 leading-relaxed tablet:text-xl text-xs">
                {about && about.description[0].desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="secondRow noShow flex justify-center tablet:mt-32 mt-8 tablet:mb-80"
            >
              <div className="w-1/2  mb-20 max-w-md">
                <p className="secondDesc p-2.5 my-auto mx-0 leading-relaxed tablet:text-xl text-xs">
                  {about && about.description[1].desc}
                </p>
                <div className={`${josefin.className}`}>
                  <Link
                    href={`/work`}
                    className="workBtn tablet:text-xl text-sm mx-2.5 capitalize max-w-xs font-bold bg-black py-2 px-1 mt-2 text-white rounded-lg text-center w-full block"
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

          <section className="snap-end ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="mt-20 tablet:mb-80 hobby flex flex-wrap justify-center py-12 mb-36 tablet:max-w-4xl max-w-sm mx-auto"
            >
              <div className="highlight flex justify-start my-8 ml-2.5 pt-7">
                <h2
                  className={`${josefin.className} tablet:text-3xl text-2xl font-semibold uppercase bg-gradient-to-b from-transparent from-50% to-main-color to-50% text-center px-2.5 m-0`}
                >
                  What I Like To Do
                </h2>
              </div>
              <div className="contentWrap px-12 tablet:text-xl text-xs  py-4 leading-loose ">
                <p>
                  On my free time, I like to play games when I'm in the
                  indoor-sy mood:
                </p>
                <ul className="list-disc ml-10">{indoorHobby}</ul>
                <p className="mt-4 tablet:mt-16 leading-loose">
                  In my outdoor-sy mood, I like to:
                </p>
                <ul className="list-disc ml-10 leading-loose">
                  {outdoorHobby}
                </ul>
              </div>
            </motion.div>
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
}
