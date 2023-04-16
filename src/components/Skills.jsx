import React, { useContext } from "react"
// import Marquee from "react-fast-marquee"

import { GitHub, PersonPin } from "@mui/icons-material"

import SkillsTabs from "./SkillsTabs"

function Skills() {
  return (
    <div className="h-fit w-full flex flex-col gap-2 py-0 px-0" id="skills">
      {/*  */}
      <span className="flex items-center">
        <hr className="border-t border-teal-400 mx-3 w-10" />
        <span className="text-[#7fffd4] text-[33px] font-semibold">Skills</span>
        <hr className="border-t border-teal-400 mx-3 flex-grow" />
      </span>
      {/*  */}
      <div className="flex gap-4 ">
        <div className="flex gap-5">
          <div className="flex flex-col gap-6">
            <SkillItem icon={<GitHub />} itemName="Web Development" />
            <SkillItem icon={<GitHub />} itemName="Mobile Development" />
          </div>
          <div className="flex flex-col items-center h-inherit justify-center">
            <SkillItem icon={<GitHub />} itemName="FullStack Development" />
          </div>
        </div>
        <div className="flex flex-col border-l flex-1 h-60 rounded-md overflow-hidden">
          <SkillsTabs />
        </div>
      </div>

      {/*  */}
      {/*  */}
      <span className="flex items-center mt-1">
        <hr className="border-t border-teal-400 mx-3 w-3" />
        <span className="text-[#7fffd4] text-[15px] font-semibold">
          General Skills
        </span>
        <hr className="border-t border-teal-400 ml-3 flex-grow" />
      </span>

      {/*  */}
      <span className="flex gap-2 justify-around py-0">
        <ExpTag itemText={"Critical Thinker"} />
        <ExpTag itemText={"Team Player"} />
        <ExpTag itemText={"Very Creative"} />
      </span>
      {/*  */}
    </div>
  )
}
const SkillItem = ({ icon, itemName }) => {
  return (
    <span className="border flex items-center text-[#01d293] hover:text-[#ffffff]  border-teal-500 gap-2 bg-[#01d29313] px-5 py-7 rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl transition-all duration-500 hover:bg-[#01d293] hover:-translate-y-5">
      <span>{icon}</span>
      <div className="span font-semibold text-[17px] ">{itemName}</div>
    </span>
  )
}

const ExpTag = ({ years, itemText }) => {
  return (
    <span className="items-center flex bg-[#01d29313] px-2 rounded-md gap-1 border border-teal-300 cursor-pointer">
      <PersonPin className="text-[38px] text-[#01d293]" />
      <span className="flex flex-col text-[#01d293]">
        <span className="font-semibold text-[19px]">{itemText}</span>
        <span className="text-[19px] font-bold text-[#ffffff]">{years}</span>
      </span>
    </span>
  )
}
export default Skills
