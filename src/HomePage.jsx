import React, { useState, useEffect } from "react"
import SideNavbar from "./components/SideNavbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Repos from "./components/Repos"
import Contact from "./components/Contact"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material"
import { personalInfo } from "./data/personalInfo"
import Design from "./components/Design"
import Projects from "./components/Projects"
import Navbar from "./components/Navbar"

const HomePage = () => {
  const [userData, setUserData] = useState(true)
  const [reposData, setReposData] = useState([])

  // console.log(JSON.stringify(import.meta.env.VITE_githubApiAccessToken))
  // console.log(JSON.stringify(process.env.githubApiAccessToken))
  useEffect(() => {
    // const YOUR_ACCESS_TOKEN = JSON.stringify(process.env.githubApiAccessToken)
    // console.log(YOUR_ACCESS_TOKEN)

    // const headers = {
    //   Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
    // }

    async function fetchUserData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${personalInfo.githubUserName}`
          // { headers }
        )
        const userData = await response.json()

        setUserData(userData)
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    async function fetchReposData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${personalInfo.githubUserName}/repos`
          // { headers }
        )
        const reposData = await response.json()

        setReposData(reposData)
        console.log(reposData)
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserData()
    fetchReposData()
  }, [])

  return (
    <>
      <div className="z-20 relative app w-full overflow-y-auto transition-all duration-500 ease-in-out scroll-smooth">
        {/* <div className="flex relative overflow-y-auto h-screen"> */}
        <Navbar />
        <div className="flex flex-col gap-0 bg-cover px-40 w-full">
          {/* <SideNavbar /> */}
          <Hero
            githubBio={userData.login}
            aboutMe={userData.bio}
            githubName={userData.name}
            githubAvatar={userData.avatar_url}
          />

          <span className="markup">&lt;html&gt;</span>
          <span className="markup ml-5">&lt;body&gt;</span>

          <AboutMe aboutMe={userData?.aboutMe} />

          <span className="markup ml-8">&lt;/br&gt;</span>

          <Skills />

          <span className="markup ml-8">&lt;/br&gt;</span>

          <Projects />

          <span className="markup ml-8">&lt;/br&gt;</span>

          {/* <Experience /> */}

          <Repos repos={reposData} /> 

          <span className="markup ml-8">&lt;/br&gt;</span> 

          <Contact />

          <span className="markup ml-6">&lt;/body&gt;</span>
          <span className="markup">&lt;/html&gt;</span>
        </div>
        {/*  */}

        <div className="bottom-20 left-28 z-50 fixed flex flex-col gap-1 text-xlg">
          <a href="https://github.com/james-mumo" className="hoverEffect">
            <GitHub />
          </a>
          <a href="#" className="hoverEffect">
            <LinkedIn />
          </a>
          <a href="#" className="hoverEffect">
            <Twitter />
          </a>
          <a href="#" className="hoverEffect">
            <Instagram />
          </a>
        </div>
        <a
          href="mailto:mumojames98@gmail.com"
          className="bottom-10 right-28 mailTo z-50  px-5 py-10 fixed hover:text-teal-300 transition-all duration-500  hover:-translate-y-3 hover:translate-x-3">
          mumojames98@gmail.com
        </a>
      </div>
      {/* </div> */}
      <div className="w-full h-[100vh] absolute top-0 left-0 z-10">
        <Design />
      </div>
    </>
  )
}

export default HomePage
