import React from "react"
import { Visibility } from "@mui/icons-material"
import "./nav.css"

const Navbar = () => {
  return (
    <main className="nav w-full z-50 fixed flex flex-row justify-between px-36 py-2 shadow-lg shadow-[rgb(6, 56, 97)]">
      <a href="/" className="pl-4">
        <span className="flex items-center gap-2 overflow-hidden cursor-pointer">
          <img
            src="./gitAvatar.png"
            alt="usernameInitialsIcon"
            className="object-cover rounded-full border-[2px] border-[#1ee0e0] w-[45px] h-[45px]"
          />

          <h1 className="text-[32px]">
            <span className="text-[#01d293] text-[38px] ">M</span>umo
          </h1>
        </span>
      </a>
      <ul className="navItems flex justify-end flex-row gap-8 pr-8 w-fit">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="seeGithub">
          <a href="https://github.com/james-mumo" target="_blank">
            <Visibility className=" theEye text-[#1ee0e0]" />
            See Github
          </a>
        </li>
      </ul>
    </main>
  )
}

export default Navbar
