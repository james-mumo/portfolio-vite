import React from "react"
import {
  WhatsApp,
  MailOutline,
  PersonPin,
  PhoneInTalk,
} from "@mui/icons-material"
import { personalInfo } from "../data/personalInfo"

const Contact = () => {
  const ConnectItem = ({ itemTitle, itemContent }) => {
    return (
      <span className="flex gap-2 items-center">
        <span className=" bg-teal-600 border border-teal-500 p-1 rounded-md">
          {itemTitle}
        </span>
        <span className="text-[#7fffd4] font-bold">{itemContent}</span>
      </span>
    )
  }
  return (
    <div id="contact" className="h-fit w-full flex flex-col gap-0 py-0 px-0">
      {/*  */}
      <span className="flex items-center">
        <hr className="border-t border-teal-400 mx-3 w-10" />
        <span className="text-[#7fffd4] text-[33px] font-semibold">
          Contact
        </span>
        <hr className="border-t border-teal-400 mx-3 flex-grow" />
      </span>
      {/*  */}
      {/*  */}
      <div className="flex w-full  gap-10 justify-between">
        <div className="flex flex-1 flex-col ">
          <span className="flex items-center">
            <hr className="border-t border-teal-400 mx-3 w-4" />
            <span className="text-[#7fffd4] text-[15px] font-semibold">
              Lets Connect
            </span>
            <hr className="border-t border-teal-400 ml-3 flex-grow" />
          </span>
          {/*  */}

          <span className="bg-[#01d29313] flex flex-col gap-4 p-6">
            <span className="text-[#7fffd4] opacity-70">
              Reach out for MERN, React-Native and Kotlin collaborations or
              hiring, Currently looking for a new opportunity 💰
            </span>
            {/* contact cards */}
            <ConnectItem
              itemTitle={<MailOutline />}
              itemContent={personalInfo.email}
            />
            <ConnectItem
              itemTitle={<WhatsApp />}
              itemContent={personalInfo.whatsapp}
            />
            <ConnectItem
              itemTitle={<PhoneInTalk />}
              itemContent={personalInfo.phoneNumber}
            />
            <ConnectItem
              itemTitle={<PersonPin />}
              itemContent={personalInfo.location}
            />
          </span>
          {/*  */}
        </div>
        <div className="flex flex-1 flex-col">
          <span className="flex items-center">
            <hr className="border-t border-teal-400 mx-3 w-4" />
            <span className="text-[#7fffd4] text-[15px] font-semibold">
              Send Me A Mail
            </span>
            <hr className="border-t border-teal-400 mx-3 flex-grow" />
          </span>

          <span className="bg-[#01d29313] flex flex-col gap-4 p-6 relative">
            <span className="text-[#7fffd4] opacity-70 z-10">
              I'll probably see this late, why don't you text Instead😐
            </span>
            {/* form card */}
            <span className="mailForm flex flex-col gap-5 z-10 py-4 px-3 rounded-md">
              <input
                type="text"
                placeholder="Name"
                className="bg-[#0f4b395b] outline-none px-4 py-3 border border-teal-500 rounded-md text-teal-300"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-[#0f4b395b] outline-none px-4 py-3 border border-teal-500 rounded-md text-teal-300"
              />
              <textarea
                rows={3}
                type="text"
                placeholder="Message"
                className="bg-[#0f4b395b] outline-none px-4 py-3 border border-teal-500 rounded-md text-teal-300"
              />
            </span>
            {/*  */}
            {/* abstacts */}

            <span className="absolute bg-teal-600 top-28 right-32 h-36 w-36 rounded-full -z-1"></span>
            <span className="absolute bg-blue-700 right-16 bottom-10 h-28 w-28  rounded-full -z-1"></span>
            <span className="absolute bg-blue-700 left-28 bottom-24 h-28 w-40   rounded-full -z-1"></span>
          </span>
          {/*  */}
        </div>
      </div>
      {/*  */}
      {/*  */}
      <hr className="border-t border-teal-400 mx-0 flex-grow mt-3" />
      <div className="flex items-center w-full py-4 justify-center">
        <span>
          Made with ❤ by
          <span className="text-teal-200 font-bold"> James Mumo</span> ©
          {new Date().getFullYear()}
        </span>
      </div>
    </div>
  )
}

export default Contact
