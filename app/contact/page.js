"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { josefin, mulish } from "../fonts";
import Link from "next/link";
import logo from "public/ehBlue.svg";
import github from "public/github.svg";
import linkedin from "public/linkedin.svg";
import portrait from "public/portrait.jpg";
import contact from "/json/contact.json";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Header logo={logo} />
      <main className="flex flex-col justify-between h-[90vh] ">
        <section className="flex flex-col pt-12 mx-auto " id="contact">
          <div className="leftWrap mx-auto  h-[201px] w-[201px]">
            <Image
              className="rounded-full"
              src={portrait}
              alt="portrait of me"
            />
          </div>
          <div className=" p-8  rightWrap">
            <div className="highlight flex justify-center ml-2.5 pt-7">
              <h2
                className={`${josefin.className} text-3xl font-bold uppercase bg-gradient-to-b from-transparent from-50% to-second-color to-50% text-center px-2.5 m-0`}
              >
                Get in touch
              </h2>
            </div>
            <p className="text-center p-6 ">
              If you have any questions, feel free to contact me through my
              email at elisacodes@outlook.com
            </p>
            <div className="contactIcons flex justify-between w-28 mx-auto ">
              <Link href={contact && contact.socials[0]?.link} target="_blank">
                <Image src={github} alt="github icon" />
              </Link>
              <Link href={contact && contact.socials[1]?.link} target="_blank">
                <Image src={linkedin} alt="linkedin icon" />
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
