import React from "react"
import { Visibility } from "@mui/icons-material"
import "./nav.css"

const Navbar = () => {
  return (
    <main className="nav sticky top-0 h-[100vh] w-[12vw] flex flex-col items-center justify-between px-2 py-10 shadow-lg shadow-[rgb(6, 56, 97)] ">
      {/*  */}
      <a href="/">
        <span className="flex flex-col items-center gap-1 overflow-hidden cursor-pointer">
          <img
            src="./gitAvatar.png"
            alt="usernameInitialsIcon"
            className="object-cover rounded-full border-[2px] border-[#1ee0e0] w-[85px] h-[85px]"
          />

          <h1 className="text-[32px]">
            <span className="text-[#01d293] text-[38px] ">M</span>umo
          </h1>
        </span>
      </a>
      {/*  */}

      {/*  */}
      <ul className="navItems flex-[0.5]">
        <li className="">
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        {/* <li className="">
          <a href="#experience">Experience</a>
        </li> */}
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#repo">Other Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/*  */}
      <span className="seeGithub mt-14">
        <Visibility className=" theEye text-[#1ee0e0]" />
        See Github
      </span>
    </main>
  )
}

export default Navbar
