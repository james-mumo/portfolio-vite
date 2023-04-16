import React, { useState, useEffect } from "react"

function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const gethours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours()
  const hours = gethours.toString().padStart(2, "0")
  const minutes = time.getMinutes().toString().padStart(2, "0")
  const seconds = time.getSeconds().toString().padStart(2, "0")
  const ampm = time.getHours() >= 12 ? "PM" : "AM"
  const date = time.getDate()
  const month = time.toLocaleString("default", { month: "long" })
  const year = time.getFullYear()

  return (
    <div className=" text-[#01d293] font-bold flex flex-col mt-2">
      <div className="flex text-2xl leading-none">
        <span className="mr-0">{hours}:</span>
        <span className="mr-0">{minutes}</span>
        <span className="text-[15px] font-thin mx-1 leading-[20px]">
          {seconds}
        </span>
        <span className="ml-1">{ampm}</span>
      </div>

      <span className="text-[13px]">
        {date}
        {
          ["th", "st", "nd", "rd"][
            date % 10 === 1 && date % 100 !== 11
              ? 1
              : date % 10 >= 4 || (date % 100 >= 10 && date % 100 <= 20)
              ? 0
              : date % 10
          ]
        }{" "}
        {month} {year}
      </span>
    </div>
  )
}

export default DigitalClock
