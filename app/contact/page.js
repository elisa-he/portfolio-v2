"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { josefin, mulish } from "../fonts";
import Link from "next/link";
import logo from "/public/ehBlue.svg";
import github from "/public/github.svg";
import linkedin from "/public/linkedin.svg";
import portrait from "/public/portrait.jpg";
import contact from "/json/contact.json";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Header logo={logo} />
      <main className="flex flex-col  justify-between tablet:h-[90vh] h-[90vh] ">
        <section
          className="flex tablet:flex-row tablet:flex-wrap flex-col tablet:my-auto tablet:max-w-full tablet:justify-center  pt-12 mx-auto "
          id="contact"
        >
          <div className="leftWrap mx-auto tablet:mx-16 max-h-[300px] max-w-[300px]">
            <Image
              className="rounded-full"
              src={portrait}
              alt="portrait of me"
            />
          </div>
          <div className=" p-8 tablet:p-4  rightWrap">
            <div className="highlight flex tablet:justify-start justify-center tablet:ml-0 ml-2.5  pt-7">
              <h2
                className={`${josefin.className}  tablet:text-4xl text-3xl font-bold uppercase bg-gradient-to-b from-transparent from-50% to-second-color to-50% tablet:text-left text-center tablet:p-0 px-2.5 m-0`}
              >
                Get in touch
              </h2>
            </div>
            <p className="text-center tablet:text-2xl tablet:text-left tablet:w-[500px] tablet:pl-0 p-6 ">
              If you have any questions, feel free to contact me through my
              email at elisacodes@outlook.com
            </p>
            <div className="contactIcons flex justify-between w-28 tablet:mx-0 mx-auto ">
              <div className="pr-4">
                <Link
                  href={contact && contact.socials[0]?.link}
                  className=""
                  target="_blank"
                >
                  <Image
                    src={github}
                    className="tablet:w-24"
                    alt="github icon"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href={contact && contact.socials[1]?.link}
                  target="_blank"
                >
                  <Image
                    src={linkedin}
                    className="tablet:w-24 "
                    alt="linkedin icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
