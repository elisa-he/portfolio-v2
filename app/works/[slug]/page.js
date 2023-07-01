"use client";
import logo from "public/eh.svg";
import works from "/json/work.json";
import Header from "/app/components/header";
import Footer from "/app/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Page({ params }) {
  const workId = params.slug;

  // from the array of objects, find the object key title value the same as the slug, then declare variables as per object gotten.

  const work = works.findIndex((obj) => obj.title == workId);

  const title = works?.length && works[work]?.title;

  const skills =
    works?.length &&
    works[work]?.usedSkill.map((skill, i) => <li key={i}>{skill}</li>);

  const tools =
    works?.length &&
    works[work]?.usedTool.map((tool, i) => <li key={i}>{tool}</li>);

  const image = works?.length && works[work]?.image;

  const link = works?.length && works[work].link;

  const team =
    works?.length && works[work]?.team.map((t, i) => <li key={i}>{t}</li>);

  const projectDesc = works?.length && works[work]?.desc;

  const designDesc = works?.length && works[work]?.designDesc;
  // const highlightDesc =
  //   works?.length &&
  //   works[work]?.highlights.map((h, i) => {
  //     <p>{h.highlightDesc}</p>;
  //   });
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
      <section id="single" className="mb-8">
        <div className="portfolioContent flex flex-wrap flex-col p-4 max-w-[26.875rem] my-0 mx-auto">
          <div className="highlight flex justify-start my-8 ml-2.5 pt-7">
            <h2 className=" text-2xl font-josefin font-semibold uppercase bg-gradient-to-b from-transparent from-50% to-main-color to-50% text-center px-2.5 m-0">
              {title}
            </h2>
          </div>
          <img className="workImg" src={image} alt="image of website" />
          <div className="workTop">
            <div className="workLeft">
              <p className="subtitle uppercase">used skills</p>
              <ul className="flex p-0 my-[0.3rem] mx-0 items-center">
                {skills}
              </ul>
            </div>
            <div className="workRight">
              <p className="subtitle uppercase">used tools</p>
              <ul className="flex p-0 my-[0.3rem] mx-0 items-center">
                {tools}
              </ul>
            </div>
          </div>

          <p className="subtitle uppercase">team</p>
          <ul>{team}</ul>
          <p className="workDesc">{projectDesc}</p>
          <Link href={link} className="btn black-outline ">
            <button className="uppercase">live site</button>
          </Link>

          <section>
            <div className="tabs">
              <div className="tab 1" onClick={() => handleClick(1)}>
                <h3 key={1}>planning</h3>
                <div>{isActive === 1 ? "-" : "+"}</div>
              </div>
              {isActive === 1 && <p className="desc">{designDesc}</p>}
              <div className="tab 2" onClick={() => handleClick(2)}>
                <h3 key={2}>highlights</h3>
                <div>{isActive === 2 ? "-" : "+"}</div>
              </div>
              {isActive === 2 && (
                <div className="desc">
                  {works?.length &&
                    works[work]?.highlights?.map((h) => {
                      return (
                        <div className="highlightWrap">
                          <img
                            className="highlightImg"
                            src={h.highlightImg}
                            alt=""
                          />
                          <p className="highlightDesc">{h.highlightDesc}</p>
                        </div>
                      );
                    })}
                </div>
              )}
              <div className="tab 3" onClick={() => handleClick(3)}>
                <h3 key={3}>what i learned</h3>
                <div>{isActive === 3 ? "-" : "+"}</div>
              </div>

              {isActive === 3 && <p className="desc">{learnedDesc}</p>}
            </div>
          </section>

          <div className="singleBtn">
            <Link href={`/work`} className="btnGreen ">
              <button className="uppercase"> check out more projects</button>
            </Link>
            <Link href={`/contact`} className="btn black-outline ">
              <button className="uppercase">get in touch</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
