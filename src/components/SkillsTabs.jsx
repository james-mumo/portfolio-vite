import { personalInfo } from "../data/personalInfo"
import { GitHub, DoubleArrowOutlined } from "@mui/icons-material"
import React, { useState } from "react"

const SkillsTabs = () => {
  const [tabItems, setTabItems] = useState(
    personalInfo.skillsTabsData.languages
  )
  const [tabHeaders, setTabHeaders] = useState([
    "Languages",
    "FrameWorks",
    "Tools",
    "Skills",
  ])

  const [activeTab, setActiveTab] = useState(tabHeaders[0])

  const handleSetTabItems = (tabHeader, index) => {
    setActiveTab(tabHeader)

    switch (tabHeader) {
      case tabHeaders[0]:
        setTabItems(personalInfo.skillsTabsData.languages)
        break
      case tabHeaders[1]:
        setTabItems(personalInfo.skillsTabsData.frameworksAndLibraries)
        break
      case tabHeaders[2]:
        setTabItems(personalInfo.skillsTabsData.tools)
        break
      case tabHeaders[3]:
        setTabItems(personalInfo.skillsTabsData.skills)
        break
    }
  }
  return (
    <div className="flex flex-1 h-60">
      {/*  */}
      <div className="flex flex-col gap-3 bg-[#088a63] justify-around p-1 h-60">
        {tabHeaders.map((tabHeader, index) => (
          <span
            id={index}
            key={index}
            onClick={() => handleSetTabItems(tabHeader, index)}
            className={`flex px-3 hover:bg-[#0c6b4f] gap-2 p-3 rounded-md transition-all duration-500 cursor-pointer ${
              activeTab == tabHeader && "activeSkillTab"
            }`}>
            <GitHub /> {tabHeader}
          </span>
        ))}
      </div>
      {/*  */}
      <div className="grid w-full py-4 px-3 flex-col bg-[#01d29313] overflow-y-scroll h-60">
        {tabItems.map((tabItem, index) => (
          <span className="flex text-[19px] gap-3 font-bold text-[#01d293] items-center mx-2 my-2">
            {/* <DoubleArrowOutlined /> */}
            <span className="flex border border-teal-900 px-3 py-1 gap-2  cursor-pointer">
              <GitHub /> {tabItem}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillsTabs
