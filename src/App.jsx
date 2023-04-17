import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Repos from "./components/Repos"
import Contact from "./components/Contact"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material"
import { personalInfo } from "./data/personalInfo"
import Design from "./components/Design"

const App = () => {
  const [userData, setUserData] = useState(true)
  const [reposData, setReposData] = useState([])

  console.log(JSON.stringify(import.meta.env.VITE_githubApiAccessToken))
  console.log(process.env.githubApiAccessToken)
  useEffect(() => {
    const YOUR_ACCESS_TOKEN = import.meta.env.VITE_githubApiAccessToken
    console.log(YOUR_ACCESS_TOKEN)

    const headers = {
      Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
    }

    async function fetchUserData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${personalInfo.githubUserName}`,
          { headers }
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
          `https://api.github.com/users/${personalInfo.githubUserName}/repos`,
          { headers }
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
      <Navbar />

      <div className="app w-full flex flex-col gap-40 px-40 relative bg-cover z-20">
        <Hero
          githubBio={userData.login}
          aboutMe={userData.bio}
          githubName={userData.name}
          githubAvatar={userData.avatar_url}
        />

        <AboutMe aboutMe={userData?.aboutMe} />
        <Skills />
        <Experience />
        <Repos repos={reposData} />

        <Contact />

        <div className="bottom-20 left-24  z-50 fixed flex flex-col gap-1 text-xlg">
          <a href="#" className="hoverEffect">
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

        {/*  */}
        <a
          href="mailto:mumojames98@gmail.com"
          className=" bottom-10 right-20 mailTo z-50  px-5 py-10 fixed hover:text-teal-300 transition-all duration-500  hover:-translate-y-3 hover:translate-x-3">
          mumojames98@gmail.com
        </a>
      </div>
      <div className="w-full h-screen absolute top-0 left-0 z-10">
        <Design />
      </div>
    </>
  )
}

export default App
