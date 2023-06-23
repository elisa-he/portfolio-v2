"use client";
import "../normalize.css";
import "../globals.css";
import { mulish, josefin } from "../fonts";
import Navbar from "../components/navbar";

export default function Template({ children }) {
  return (
    <div className={`${mulish.variable} ${josefin.variable}`}>
      <Navbar color={"bg-main-color"} />
      {children}
    </div>
  );
}
