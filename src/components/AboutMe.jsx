import { personalInfo, aboutMeInfoTags } from "../data/personalInfo"
import { FormatQuoteOutlined, PersonPin } from "@mui/icons-material"
import TagSphere from "./TagSphere"

const page = ({ aboutMe }) => {
  const tags = [
    ...personalInfo.skillsTabsData.frameworksAndLibraries,
    ...personalInfo.skillsTabsData.languages,
    ...personalInfo.skillsTabsData.tools,
  ]
  return (
    <div id="about" className="h-fit w-full py-10 flex flex-col gap-0 px-0">
      <span className="markup ml-9">&lt;section&gt;</span>
      {/*  */}
      <h6 className="markup ml-14 text-[15px]">&lt;h2&gt;</h6>
      <span className="flex items-center">
        <hr className="border-t border-teal-400 mx-3 w-10" />
        <span className="text-[#7fffd4] text-[33px] font-semibold">About</span>
        <hr className="border-t border-teal-400 mx-3 flex-grow" />
      </span>
      <h6 className="markup ml-14 text-[15px]">&lt;/h2&gt;</h6>
      <h6 className="markup ml-14 text-[15px]">&lt;div&gt;</h6>

      <div className="flex gap-20 items-center justify-center">
        {/* <img
          className="aboutmeImg border-teal-400 border h-[390px] w-[390px] rounded-md"
          src={"./gitAvatar.png"}
          alt="gitAvatar"
        /> */}
        {/* <div className="flex h-10 w-10 border relative"> */}
        <TagSphere tags={tags} width={600} height={400} />
        {/* </div> */}
        {/*  */}

        {/*  */}

        {/*  */}
        <span className="aboutMeInfo flex flex-col py-4 gap-2">
          <h6 className="markup ml-0 text-[15px]">&lt;p&gt;</h6>
          <span className="flex items-center">
            {/* <hr className="border-t border-teal-400 mx-3 w-10" /> */}
            <span className="text-[#7fffd4] text-[15px] font-semibold">
              About Me
            </span>
            <hr className="border-t border-teal-400 mx-3 flex-grow" />
          </span>
          {/*  */}
          {/* <span className="githubBio text-2xl">
            {aboutMe || personalInfo.fakeGithubBio}
          </span> */}
          {/*  */}

          <span className="aboutInfo opacity-70">
            <FormatQuoteOutlined
              color="#7fffd4"
              fontSize="large"
              className="p-0 rotate-0 ml-1 mr-2 text-[#7fffd4]"
              sx={{ rotate: "180deg" }}
            />
            <span>
              I am a passionate Developer with intrests in
              <span className=" text-[#7fffd4] opacity-100">
                {" "}
                Web and Mobile Developement.
              </span>
              I have considerable experience with languages and frameworks such
              as{" "}
              <span className=" text-[#7fffd4] opacity-100">
                React, React-Native, NextJs, Vue.js, Node/Express.Js, Flutter,
                Kotlin and Java
              </span>
              . I also have an Interest in{" "}
              <span className=" text-[#7fffd4] opacity-100">
                Data Science and Machine Learning{" "}
              </span>
              and yeah I Think AI will take over at some point,{" "}
              <span className=" text-[#7fffd4] font-semibold text-[20px] opacity-100">
                Judgement Day is Coming😁
              </span>
            </span>
            <FormatQuoteOutlined
              color="#7fffd4"
              fontSize="large"
              className="p-0  ml-2 mr-1 text-[#7fffd4]"
            />
            <h6 className="markup ml-0 text-[15px]">&lt;/p&gt;</h6>
          </span>
          {/*  */}

          <h6 className="markup ml-0 text-[15px] mt-5">&lt;/span&gt;</h6>
          <span className="flex items-center ">
            <hr className="border-t border-teal-400 mx-3 w-10" />
            <span className="text-[#7fffd4] text-[15px] font-semibold">
              Experience Details
            </span>
            <hr className="border-t border-teal-400 mx-3 flex-grow" />
          </span>
          {/*  */}
          <span className="flex gap-2 justify-around py-2">
            <ExpTag
              years={aboutMeInfoTags.yearsOfExp}
              itemText={"Years of Experience"}
            />
            <ExpTag
              years={aboutMeInfoTags.projectsCompleted}
              itemText={"Projects Completed"}
            />
            <ExpTag
              years={aboutMeInfoTags.satisfiedClients}
              itemText={"Clients Satisfied"}
            />
          </span>

          <h6 className="markup ml-0 text-[15px]">&lt;/span&gt;</h6>
          {/*  */}
        </span>
      </div>

      <h6 className="markup ml-9 text-[15px]">&lt;/div&gt;</h6>
      <span className="markup ml-8">&lt;/section&gt;</span>
    </div>
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
export default page
