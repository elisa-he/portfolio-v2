"use client";
import logo from "/public/eh.svg";
import works from "/json/work.json";
import Header from "/app/components/header";
import Footer from "/app/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Page({ params }) {
  const workId = decodeURIComponent(params.slug);

  const work = works.findIndex((obj) => obj.title == workId);

  const title = works?.length && works[work]?.title;

  const skills =
    works?.length &&
    works[work]?.usedSkill.map((skill, i) => (
      <li className="tablet:text-base text-xs py-0 px-1 capitalize" key={i}>
        {skill}
      </li>
    ));

  const tools =
    works?.length &&
    works[work]?.usedTool.map((tool, i) => (
      <li className="tablet:text-base text-xs py-0 px-1 capitalize" key={i + 2}>
        {tool}
      </li>
    ));

  const image = works?.length && works[work]?.image;

  const link = works?.length && works[work].link;

  const team =
    works?.length &&
    works[work]?.team.map((t, i) => (
      <li className="tablet:text-base text-xs py-0 px-1 capitalize" key={i + 1}>
        {t}
      </li>
    ));

  const projectDesc = works?.length && works[work]?.desc;

  const designDesc = works?.length && works[work]?.designDesc;

  const learnedDesc = works?.length && works[work]?.learnedDesc;

  const [isActive, setIsActive] = useState(0);

  const handleClick = (key) => {
    if (key === isActive) {
      setIsActive(0);
    } else {
      setIsActive(key);
    }
  };

  return (
    <>
      <Header logo={logo} />
      <section id="single" className="mb-8 font-mulish">
        <div className="portfolioContent flex flex-wrap flex-col p-4 max-w-[50rem] my-0 mx-auto">
          <div className="highlight flex justify-start my-8 ml-2.5 pt-7">
            <h2 className=" tablet:text-4xl text-2xl font-josefin font-semibold uppercase bg-gradient-to-b from-transparent from-50% to-main-color to-50% text-center px-2.5 m-0">
              {title}
            </h2>
          </div>
          <img className="workImg" src={image} alt="image of website" />
          <div className="workTop  flex flex-wrap justify-between py-4 px-0">
            <div className="workLeft ">
              <p className="subtitle tablet:text-base  uppercase underline m-0 font-semibold text-xs">
                used skills
              </p>
              <ul className=" flex p-0 my-[0.3rem] mx-0 items-center">
                {skills}
              </ul>
            </div>
            <div className="workRight">
              <p className="subtitle tablet:text-base uppercase underline m-0 font-semibold text-xs">
                used tools
              </p>
              <ul className=" flex p-0 my-[0.3rem] mx-0 items-center">
                {tools}
              </ul>
            </div>
          </div>

          <p className="subtitle tablet:text-base uppercase underline m-0 font-semibold text-xs">
            team
          </p>
          <ul className=" flex p-0 my-[0.3rem] mx-0 items-center">{team}</ul>
          <p className="workDesc py-4 leading-8">{projectDesc}</p>
          <Link
            href={link}
            target="_blank"
            className="btn black-outline black-outline  my-1 mx-auto "
          >
            <button className="uppercase hover:duration-500  hover:bg-black hover:text-white flex bg-white border-2 border-solid border-black cursor-pointer font-semibold text-black text-sm h-12 w-72 rounded-xl font-josefin items-center justify-center">
              live site
            </button>
          </Link>

          <section>
            <div className="tabs font-mulish">
              <div
                className="tab flex justify-between cursor-pointer my-9 mx-0 capitalize border-solid border-b border-black 1 pb-1.5"
                onClick={() => handleClick(1)}
              >
                <h3 className="font-semibold  text-xl m-0" key={1}>
                  planning
                </h3>
                <div>{isActive === 1 ? "-" : "+"}</div>
              </div>
              {isActive === 1 && (
                <p className="desc pb-4 whitespace-pre-line align-bottom leading-8">
                  {designDesc}
                </p>
              )}
              <div
                className="tab flex justify-between cursor-pointer my-9 mx-0 capitalize border-solid border-b border-black 1 pb-1.5 2"
                onClick={() => handleClick(2)}
              >
                <h3 className="font-semibold  text-xl m-0" key={2}>
                  highlights
                </h3>
                <div>{isActive === 2 ? "-" : "+"}</div>
              </div>
              {isActive === 2 && (
                <div className="desc relative flex flex-wrap items-center flex-col  tablet:flex-row whitespace-pre-line align-bottom py-8 px-12">
                  {works?.length &&
                    works[work]?.highlights?.map((h) => {
                      return (
                        <div className="highlightWrap tablet:max-w-2xl tablet:flex-nowrap flex flex-wrap pb-12 items-center justify-center">
                          <Image
                            className="highlightImg w-80 h-auto"
                            width={350}
                            height={400}
                            src={h.highlightImg}
                            alt="highlights of website"
                          />
                          <p className="highlightDesc tablet:pl-8 pb-4 leading-8  font-bold">
                            {h.highlightDesc}
                          </p>
                        </div>
                      );
                    })}
                </div>
              )}
              <div
                className="tab flex justify-between cursor-pointer my-9 mx-0 capitalize border-solid border-b border-black 1 pb-1.5 3"
                onClick={() => handleClick(3)}
              >
                <h3 className="font-semibold  text-xl m-0" key={3}>
                  what i learned
                </h3>
                <div>{isActive === 3 ? "-" : "+"}</div>
              </div>

              {isActive === 3 && (
                <p className="desc whitespace-pre-line pb-4 leading-8">
                  {learnedDesc}
                </p>
              )}
            </div>
          </section>

          <div className="singleBtn flex flex-wrap">
            <Link href={`/works`} className="btnGreen my-1 mx-auto  ">
              <button className="uppercase flex bg-main-color border-0 cursor-pointer font-semibold text-black text-sm h-12 w-72 rounded-xl font-josefin items-center justify-center">
                check out more projects
              </button>
            </Link>
            <Link
              href={`/contact`}
              className="btn black-outline my-1 mx-auto  "
            >
              <button className="uppercase hover:duration-500   hover:bg-black hover:text-white flex bg-white border-2 border-solid border-black cursor-pointer font-semibold text-black text-sm h-12 w-72 rounded-xl font-josefin items-center justify-center">
                get in touch
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
