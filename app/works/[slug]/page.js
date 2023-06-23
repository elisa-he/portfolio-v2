"use client";
import logo from "public/eh.svg";
import works from "/json/work.json";
import Header from "/app/components/header";
import Footer from "/app/components/footer";
import Accordion from "/app/components/accordion";
import Image from "next/image";
import Link from "next/link";
export default function Page({ params }) {
  const workId = params.slug;

  const title = works?.length && works[workId]?.title;

  const skills =
    works?.length &&
    works[workId]?.usedSkill.map((skill, i) => <li key={i}>{skill}</li>);

  const tools =
    works?.length &&
    works[workId]?.usedTool.map((tool, i) => <li key={i}>{tool}</li>);

  const image = works?.length && works[workId]?.image;

  const link = works?.length && works?.title[workId].link;

  const team =
    works?.length && works[workId]?.team.map((t, i) => <li key={i}>{t}</li>);

  const projectDesc = works?.length && works[workId]?.desc;

  return (
    <>
      <Header logo={logo} />
      <section id="single">
        <div className="portfolioContent">
          <div className="highlight">
            <h2 className=" uppercase green">{title}</h2>
          </div>
          <img className="workImg" src={image} alt="image of website" />
          <div className="workTop">
            <div className="workLeft">
              <p className="subtitle uppercase">used skills</p>
              <ul>{skills}</ul>
            </div>
            <div className="workRight">
              <p className="subtitle uppercase">used tools</p>
              <ul>{tools}</ul>
            </div>
          </div>

          <p className="subtitle uppercase">team</p>
          <ul>{team}</ul>
          <p className="workDesc">{projectDesc}</p>
          <Link href={link} className="btn black-outline ">
            <button className="uppercase">live site</button>
          </Link>

          <Accordion />

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
