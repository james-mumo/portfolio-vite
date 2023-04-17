import { TypeAnimation } from "react-type-animation"
import { personalInfo } from "../data/personalInfo"
import "../index.css"
import { PersonPin } from "@mui/icons-material"
import Marquee from "react-fast-marquee"
import DigitalClock from "./DigitalClock"
import GetWeather from "./GetWeather"

export default function Hero({ githubName, githubBio, githubAvatar }) {
  const MarqueeItem = ({ name, img }) => {
    return (
      <div className="flex border  border-teal-500 p-1 object-contain bg-[#01d29313] items-center px-3 mx-4 gap-4 h-14 rounded-md">
        <img
          src={img}
          alt=""
          className=" w-10 object-contain flex justify-center items-center"
        />
        <span className="text-[#01d293]  font-semibold">{name}</span>
      </div>
    )
  }

  return (
    <div className="hero flex flex-col w-full justify-center gap-10 min-h-[85vh] items-center py-12 px-0">
      <div className="profileInfo flex h-fit py-0 w full items-center justify-center gap-24">
        <div className="profileInfo flex flex-col  h-fit gap-0 py-0">
          <span className="opacity-70 font-semibold text-[33px] leading-none">
            Hello👋🏾,I am
          </span>
          <span className="text-[#7fffd4] font-semibold text-[6em] leading-[90px]">
            {personalInfo.fullName}
          </span>
          <span className="opacity-70 pb-3 flex gap-2 font-thin text-[34px]">
            &gt;
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Android Developer",
                1000,
                "Data Scientist",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
          <div className="getInTouchBtn flex gap-2">
            <button className="bg-[#009688]  hover:bg-teal-700 px-5 text-md rounded-md py-1">
              Contact Me
            </button>
            <button className="border-[#009688] border text-teal-400  hover:border-teal-400 px-5 text-md opacity-90 rounded-md py-1">
              View CV
            </button>
          </div>
          <span className="timeDate">
            <span className="date">
              <DigitalClock />
            </span>
          </span>
        </div>

        <div className="relative h-[55vh] w-[55vh]">
          <img
            className="absolute gitAvatar border h-[55vh] w-[55vh] border-teal-600 object-cover rounded-[55px]"
            src={"./assets/j.png"}
            alt="gitAvatar"
          />
          <span className="absolute bottom-5 items-center right-3 flex bg-[#01d2934f] cursor-pointer px-2 rounded-md gap-1">
            <PersonPin className="text-[34px]" />
            <span className="flex flex-col">
              <span className="text-sm">Location</span>
              <span className="font-semibold">Thika</span>
            </span>
          </span>
          <span className="absolute top-16 items-center left-3 flex bg-[#01d2934f] cursor-pointer px-2 rounded-md gap-1">
            <PersonPin className="text-[33px]" />
            <span className="flex flex-col">
              <span className="text-sm">Experience</span>
              <span className="font-semibold ">2+ Years</span>
            </span>
          </span>
          {/* weather */}
          <span className="absolute top-6 items-center right-3 flex bg-[#01d2934f] cursor-pointer px-2 rounded-md gap-1">
            <GetWeather />
          </span>

          {/*  */}
        </div>
      </div>

      <div className="flex border w-full h-fit border-dashed border-teal-600 mt-5 p-1 items-center justify-center gap-3 ">
        <Marquee
          direction="left"
          pauseOnHover={true}
          play={true}
          gradient={false}
          speed={80}
          pauseOnClick={true}
          delay={0}
          gradientColor={[255, 255, 255]}>
          <MarqueeItem name="Java" img="./assets/skills/java.svg" />
          <MarqueeItem name="JavaScript" img="./assets/skills/javascript.svg" />
          <MarqueeItem name="React" img="./assets/skills/react.svg" />
          <MarqueeItem name="Firebase" img="./assets/skills/firebase.svg" />
          <MarqueeItem name="TypeScript" img="./assets/skills/typescript.svg" />
          <MarqueeItem name="NextJs" img="./assets/skills/nextJS.svg" />
          <MarqueeItem name="MongoDB" img="./assets/skills/mongoDB.svg" />
          <MarqueeItem name="TailWind" img="./assets/skills/tailwind.svg" />
          <MarqueeItem name="ExpressJS" img="./assets/express.png" />
          <MarqueeItem name="Git" img="./assets/skills/git.svg" />
          <MarqueeItem name="Kotlin" img="./assets/skills/kotlin.svg" />
        </Marquee>
      </div>
    </div>
  )
}
