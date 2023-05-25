import React from "react"
import { Visibility } from "@mui/icons-material"

const SeeCv = () => {
  return (
    <div className="flex flex-col">
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
        {/*  */}
        <ul className="navItems flex justify-end flex-row gap-8 pr-8 w-fit">
          <li>
            <a href="#">See CV</a>
          </li>
          <li>
            <a href="#">InternShip</a>
          </li>
          <li className="seeGithub">
            <Visibility className=" theEye text-[#1ee0e0]" />
            See Github
          </li>
        </ul>
      </main>
      {/*  */}

      {/*  */}

      {/*  */}
      <div className="mt-14">
        <div className="flex flex-col gap-4 items-center justify-evenly">
          <img
            src="./James_Mumo__Cv.png"
            alt="Image 1"
            className="h-44vh w-2/4"
          />
          <img
            src="./Internship_Letter.png"
            alt="Image 2"
            className="h-44vh w-2/4"
          />
        </div>
      </div>
    </div>
  )
}

export default SeeCv
