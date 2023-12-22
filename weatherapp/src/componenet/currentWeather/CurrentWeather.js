import React from 'react'
import axios from 'axios'
import "./style.css"


const CurrentWeather = () => {
  return (
    <div id="m-s-c">
      <section id="currentLocationSection">
        <div id="searchContainer">
          {/* Input field for city search */}
        </div>

        {/* Weather icon */}
        <div id="img-container">
          <img
            // src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            // id="weatherIcon"
            // alt="Weather Icon"
          />
        </div>

     
        <h1 id="temperature">temp</h1>

       
        <h1 id="currentLocation">location</h1>
        <h3 id="currentCity">city</h3>

      
        <div id="H-W-C">
       
          <section id="humidity">
            <h1 id="humidityVal">humidity%`</h1>
            <h3 id="humidityWord">Humidity</h3>
          </section>

          
          <section id="wind">
            <h1 id="windVal">{`speed km/h`}</h1>
            <h3 id="windWord">Wind Speed</h3>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CurrentWeather;
