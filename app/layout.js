import "./normalize.css";
import "./globals.css";
import { mulish, josefin } from "./fonts";
import Navbar from "./components/navbar";
import { useState } from "react";

export const metadata = {
  title: "Elisa Codes",
  description:
    "Welcome to my portfolio website! I am a front-end web developer passionate about creating immersive and user-friendly experiences. Explore my projects and discover my expertise in HTML, CSS, JavaScript, and modern frameworks. Let's collaborate and bring your digital vision to life!",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${josefin.variable}`}>
        <Navbar color={"bg-main-color"} />
        {children}
      </body>
    </html>
  );
}
