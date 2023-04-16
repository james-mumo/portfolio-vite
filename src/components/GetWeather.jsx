import React, { useState, useEffect } from "react"
import { weatherApiKey } from "../data/personalInfo"

const GetWeather = () => {
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Get the user's location
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords
      //   const MY_API_KEY = "0d6d150964604cc286f230308222312a"

      try {
        // Make a request to the weather API using the latitude and longitude coordinates
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${latitude},${longitude}`
        )

        // Parse the response and update the state with the weather data
        const data = await response.json()

        if (data.location) {
          setWeather(data)
          setError("")
        } else {
          setWeather(null)
          setError(data.error.message)
        }
      } catch (error) {
        setError("Error fetching weather data")
      }
    })
  }, [])

  return (
    <div>
      {/* Display the weather data */}
      {error && <div>{error}</div>}
      {weather !== null ? (
        <div className="text-[12px] text-[#01d293] gap-0 font-bold flex flex-col">
          <span>
            {weather?.location?.name}, <span>{weather?.location?.region}</span>
          </span>
          {/*  */}
          <div className="flex">
            <span className="temp text-xl">
              {weather?.current.temp_c}
              °C
            </span>
            <span className="condition text-[10px] leading-0">
              <img
                src={weather?.current.condition.icon}
                alt=""
                className="h-8 w-8"
              />
            </span>
          </div>
          {weather?.current.condition.text}
        </div>
      ) : (
        error && <div>{error}</div>
      )}
    </div>
  )
}

export default GetWeather
