import React from "react"
import {
  ExitToApp,
  FolderOpen,
  GitHub,
  LaunchOutlined,
} from "@mui/icons-material"

const Projects = () => {
  const ImgLeft = () => {
    return (
      <div className="flex h-fit py-3">
        <div className="flex flex-col">
          <span className="markup ml-12 mb-5">&lt;img&gt;</span>
          <div className="flex relative mb-4">
            <img
              src={"./assets/j.png"}
              alt=""
              className=" gitAvatar  h-[45vh] w-[44vw] border-teal-600 object-cover rounded-[05px]"
            />
            <span className="absolute  w-full h-[45vh] transition-all 3s bg-[#01d29336] hover:bg-[#01d2930c]"></span>
          </div>
          <span className="markup ml-12 mt-1">&lt;/img&gt;</span>
        </div>
        {/*  */}
        <div className=" flex-col flex flex-1 justify-center items-end pr-10">
          <span className="text-teal-300 ">Featured Project</span>
          <span className="projName text-[22px] opacity-70 font-semibold">
            Spotify Clone
          </span>
          <span className="projDesc bg-[#112240] w-[110%] p-3 z-10">
            This is a React Native app that helps users find rentals in various
            locations. It features a user-friendly interface that allows users
            to filter their search based on various parameters such as location,
            price range, and number of rooms.
          </span>
          <span className="projTags my-2">
            <span className="mr-3 border border-teal-500 px-3 py-0 rounded-sm bg-teal-800 text-white">
              Java
            </span>
          </span>
          <span className="projicons flex gap-4 pr-3">
            <GitHub style={{ fontSize: "24px", cursor: "pointer" }} />
            <LaunchOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
            <FolderOpen style={{ fontSize: "24px", cursor: "pointer" }} />
            <ExitToApp style={{ fontSize: "24px", cursor: "pointer" }} />
          </span>
        </div>
      </div>
    )
  }
  const ImgRight = () => {
    return (
      <div className="flex h-fit py-3">
        <div className=" flex-col flex flex-1 justify-center items-start pl-10">
          <span className="mb-1 text-teal-300 ">Featured Project</span>
          <span className="projName mb-2 text-[22px] opacity-70 font-semibold">
            Spotify Clone
          </span>
          <span className="projDesc bg-[#112240] w-[110%] p-3 z-10">
            This is a React Native app that helps users find rentals in various
            locations. It features a user-friendly interface that allows users
            to filter their search based on various parameters such as location,
            price range, and number of rooms.
          </span>
          <span className="projTags my-2">
            <span className="mr-3 border border-teal-500 px-3 py-0 rounded-sm bg-teal-800 text-white">
              Java
            </span>
          </span>
          <span className="projicons flex gap-4 pr-3">
            <GitHub style={{ fontSize: "24px", cursor: "pointer" }} />
            <LaunchOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
            <FolderOpen style={{ fontSize: "24px", cursor: "pointer" }} />
            <ExitToApp style={{ fontSize: "24px", cursor: "pointer" }} />
          </span>
        </div>

        <div className="flex flex-col">
          <span className="markup ml-12 mb-5">&lt;img&gt;</span>
          <div className="flex relative mb-4">
            <img
              src={"./assets/j.png"}
              alt=""
              className=" gitAvatar  h-[45vh] w-[44vw] border-teal-600 object-cover rounded-[05px]"
            />
            <span className="absolute  w-full h-[45vh] transition-all 3s bg-[#01d29336] hover:bg-[#01d2930c]"></span>
          </div>
          <span className="markup ml-12 mt-4">&lt;/img&gt;</span>
        </div>
      </div>
    )
  }
  return (
    <div id="projects" className="flex flex-col py-10">
      <span className="markup ml-9">&lt;section&gt;</span>
      <span className="markup ml-16 text-sm">&lt;h&gt;</span>
      {/*  */}
      <span className="flex items-center">
        <hr className="border-t border-teal-400 mx-3 w-10" />
        <span className="text-[#7fffd4] text-[33px] font-semibold">
          Notable Projects
        </span>
        <hr className="border-t border-teal-400 mx-3 flex-grow" />
      </span>
      <span className="markup ml-16 text-sm">&lt;/h&gt;</span>
      <div className="flex flex-col gap-2">
        <ImgLeft />
        <ImgRight />
        <ImgLeft />
      </div>

      <span className="markup ml-9">&lt;/section&gt;</span>
    </div>
  )
}

export default Projects
