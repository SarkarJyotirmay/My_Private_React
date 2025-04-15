import React from 'react'

import { FaWind } from "react-icons/fa";
import { BiTachometer } from "react-icons/bi"; 

function MapData({data}) {
  return (
    <>
        <div className="weather">
            <h2>{data.main.temp} deg C</h2>
            <h3>Feels Like {data.main.feels_like} deg C</h3>
            <p>
              <span>
              <FaWind /> {data.wind.speed} m/s {data.wind.deg} deg
              </span>
              <span>
              <BiTachometer /> {data.main.pressure} hPa
              </span>
            </p>
            <p>
              Humidity {data.main.humidity} %
            </p>
        </div>
    </>
  )
}

export default MapData