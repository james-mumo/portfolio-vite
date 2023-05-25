import React from "react"
import {
  ExitToApp,
  FolderOpen,
  GitHub,
  LaunchOutlined,
} from "@mui/icons-material"

const Projects = () => {
  const ImgLeft = ({
    projName,
    imgg,
    liveLink,
    githubLink,
    desc,
    tag1,
    tag2,
    tag3,
  }) => {
    return (
      <div className="flex h-fit py-3">
        <div className="flex flex-col">
          <span className="markup ml-12 mb-5">&lt;img&gt;</span>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[50vh] w-[44vw]">
            <div className="flex relative mb-4">
              <img
                src={imgg}
                alt=""
                className="gitAvatar h-[50vh] w-[44vw] border-teal-600 object-cover rounded-[05px]"
              />
              <span className="absolute  w-full h-[50vh] transition-all 3s bg-[#01d29336] hover:bg-[#01d2930c]"></span>
            </div>
          </a>
          <span className="markup ml-12 mt-1">&lt;/img&gt;</span>
        </div>
        {/*  */}
        <div className=" flex-col flex flex-1 justify-center items-end pr-10">
          <span className="text-teal-300 ">Featured Project</span>
          <span className="projName text-[22px] opacity-70 font-semibold">
            {projName}
          </span>
          <span className="projDesc bg-[#112240] w-[110%] p-3 z-10">
            {desc}
          </span>
          <span className="projTags flex flex-row my-2">
            <span className="mr-3 border border-teal-500 px-3 py-0 rounded-sm bg-teal-800 text-white">
              {tag1}
            </span>
            <span className="mr-3 border border-teal-500 px-3 py-0 rounded-sm bg-teal-800 text-white">
              {tag2}
            </span>
            <span className="mr-3 border border-teal-500 px-3 py-0 rounded-sm bg-teal-800 text-white">
              {tag3}
            </span>
          </span>
          <span className="projicons flex gap-4 pr-3">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <GitHub style={{ fontSize: "24px", cursor: "pointer" }} />
            </a>{" "}
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <LaunchOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FolderOpen style={{ fontSize: "24px", cursor: "pointer" }} />
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExitToApp style={{ fontSize: "24px", cursor: "pointer" }} />
            </a>
          </span>
        </div>
      </div>
    )
  }
  const ImgRight = ({
    projName,
    imgg,
    liveLink,
    githubLink,
    desc,
    tag1,
    tag2,
    tag3,
  }) => {
    return (
      <div className="flex h-fit py-3">
        <div className=" flex-col flex flex-1 justify-center items-start pl-10">
          <span className="mb-1 text-teal-300 ">Featured Project</span>
          <span className="projName mb-2 text-[22px] opacity-70 font-semibold">
            {projName}
          </span>
          <span className="projDesc bg-[#112240] w-[110%] p-3 z-10">
            {desc}
          </span>
          <span className="projTags my-2">
            <span className="mr-3 border border-teal-500 px-3 py-0 rounded-sm bg-teal-800 text-white">
              {tag1}
            </span>
            <span className="mr-3 border border-teal-500 px-3 py-0 rounded-sm bg-teal-800 text-white">
              {tag2}
            </span>
          </span>
          <span className="projicons flex gap-4 pr-3">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <GitHub style={{ fontSize: "24px", cursor: "pointer" }} />
            </a>{" "}
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <LaunchOutlined style={{ fontSize: "24px", cursor: "pointer" }} />
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FolderOpen style={{ fontSize: "24px", cursor: "pointer" }} />
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExitToApp style={{ fontSize: "24px", cursor: "pointer" }} />
            </a>
          </span>
        </div>

        <div className="flex flex-col">
          <span className="markup ml-12 mb-5">&lt;img&gt;</span>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[50vh] w-[44vw]">
            <div className="flex relative mb-4">
              <img
                src={imgg}
                alt=""
                className=" gitAvatar  h-[45vh] w-[44vw] border-teal-600 object-cover rounded-[05px]"
              />
              <span className="absolute  w-full h-[45vh] transition-all 3s bg-[#01d29336] hover:bg-[#01d2930c]"></span>
            </div>
          </a>
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
        <ImgLeft
          projName="Mern DashBoard"
          imgg="./merndash.png"
          githubLink="https://github.com/james-mumo/mern-admin-dash"
          liveLink="https://mern-admin-dash.vercel.app/"
          desc="This is a simple admin dashboard built using the MERN stack
            (MongoDB, Express, React, Node.js). The dashboard provides a
            user-friendly interface for managing and visualizing data. It
            features both dark and light themes, utilizing Material-UI tables,
            Nivo charts, and maps."
          tag1="React"
          tag2="Express"
          tag3="MongoDB"
        />
        <ImgRight
          projName="Tubonge Android App"
          imgg="./collage.png"
          githubLink="https://github.com/james-mumo/tubonge-mental-app"
          liveLink="https://raw.githubusercontent.com/james-mumo/tubonge-mental-app/main/tubonge.apk"
          desc="This Android application is developed as a final year project to address mental health concerns. The application provides a comprehensive set of features to support users in managing their mental well-being."
          tag1="Java"
          tag2="Firebase"
          tag3="Chat"
        />
        <ImgLeft
          projName="Rental Hub"
          imgg="./renthub.PNG"
          githubLink="https://github.com/james-mumo/rental-hub-rn"
          liveLink="https://raw.githubusercontent.com/james-mumo/rental-hub-rn/main/rentalhub.apk"
          desc="This is a React Native app that helps users find rentals in various locations. It allows users to filter their search based on various parameters such as location, price range, and number of rooms with detailed information about each rental, including images, features, and amenities."
          tag1="React-Native"
          tag2="Redux"
          tag3="Google-Maps"
        />
      </div>

      <span className="markup ml-9">&lt;/section&gt;</span>
    </div>
  )
}

export default Projects
