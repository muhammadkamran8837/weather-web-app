import React from "react";
import { useState } from "react";
import axios from "axios";

function FetchApi() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=47fd694e9e648cec2cf5e344bb68a01a`;

  // Api calling when user hits enter button after typing the location
  function searchLocation(event) {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
     // setLocation("");
    }
  }

  // Grab input from input field
  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="container">
      {/* this div has two child div, with gap of 80px */}
      <div className="flex flex-col gap-80 ">
        {/* TOP PORTION STARTS */}
        <div className="top flex flex-col gap-20">
          {/* INPUT/SEARCH STARTS */}
          <div className="flex items-center justify-center">
            <input
              onChange={handleInputChange}
              onKeyPress={searchLocation}
              value={location}
              type="text"
              className="border rounded-[13px] pl-2"
              placeholder="Enter Location"

            />
          </div>
          {/* INPUT/SEARCH ENDS */}

          {/* LOCATION + DESCRIPTION STARTS */}
          <div className="flex justify-between lg:justify-evenly">
            <div>
              <h1>{data.name}</h1>
              <h3>{data.main ? <h1>{data.main.temp} ℃</h1> : null}</h3>
            </div>
            <div className="rotate-90">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
              
            </div>
          </div>
          {/* LOCATION + DESCRIPTION ENDS */}
        </div>
        {/* TOP PORTION ENDS */}

        {/* BOTTOM PORTION STARTS */}
        <div className=" bottom flex flex-row justify-evenly px-1 py-5 rounded-[10px] bg-slate-400  text-center">
          <div>
            <p>{data.main ? <h1>{data.main.feels_like} ℃</h1> : null}</p>
            <p>Feels like</p>
          </div>
          <div>
            <p>{data.main ? <h1>{data.main.humidity} %</h1> : null}</p>
            <p>Humidity</p>
          </div>
          <div>
            <p>{data.main ? <h1>{data.wind.speed} MPH</h1> : null}</p>
            <p>Wind speed</p>
          </div>
        </div>
        {/* BOTTOM PORTION ENDS */}
      </div>
    </div>
  );
}

export default FetchApi;
