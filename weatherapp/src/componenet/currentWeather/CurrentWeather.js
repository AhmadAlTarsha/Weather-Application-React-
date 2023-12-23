import { React, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import "./style.css"
import { FaTemperatureArrowUp,FaTemperatureArrowDown  } from "react-icons/fa6"
import { MdOutlineDescription } from "react-icons/md";
import { WiHumidity,WiStrongWind,WiBarometer  } from "react-icons/wi";
import { AppContext } from '../../App';



const CurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState()

  const getCurrentLocation = async () => {
    return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  }

  const callAxios = async (lat, lang, cityName) => {

    let url = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}'

    if (cityName) {
      url = ``
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=20df6ed2d3d499f39b1ec55b2f5a7406&units=metric`
    }
    try {
      const result = await axios.get(url)
      setCurrentWeather(result.data)
      console.log("RES ====> ", result);

    } catch (error) {
      console.error("ERROR ====> ", error.response);
    }

  }


  useEffect(() => {
    getCurrentLocation()
      .then(async (position) => {
        await callAxios(position?.coords?.latitude, position?.coords?.longitude)
      })
      .catch((error) => {
        console.error("Error getting location: " + error.message);
      });





  }, [])



  // 

  return (
    <div id="main-screen-con">
      <div id="all-info-con">

        <div id="current-weather-con">
          <div id='current-location-image-con' >
            <section id='temp-location'><h1>{currentWeather?.sys.country}
            </h1><h1>{`${Math.round(currentWeather?.main?.temp)}°C`}</h1></section>
            <div>{<img src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@4x.png`} />}</div>
          </div>

          <div id='rest-info-con'>
            <dvi id="m-m-h-con">
              <section id='max'><FaTemperatureArrowUp size={30} color='red' />  <h3>{`${Math.round(currentWeather?.main?.temp_max)}°C`}</h3></section>
              <section id='min'><FaTemperatureArrowDown size={30} color='blue' /> <h3>{`${Math.round(currentWeather?.main?.temp_min)}°C`}</h3></section>
              <section id='humidity'><WiHumidity size={30}  /> <h3>{`${Math.round(currentWeather?.main?.temp_max)} %`}</h3></section>

            </dvi>
            <dvi id="w-p-des-con">
              <section id='w-speed'><WiStrongWind size={30} color='red'/>   <h3>{`${Math.round(currentWeather?.wind?.speed)} km/h`}</h3></section>
              <section id='pusher'><WiBarometer  size={30} color='blue' /> <h3>{`${Math.round(currentWeather?.main?.pressure)} hPa`}</h3></section>
              <section id='w-des'><MdOutlineDescription size={30} /> <h3>{currentWeather?.weather[0]?.description
}</h3></section>

            </dvi>
          </div>
        </div>
        <div id="forecast-con">
        </div>



        {/* <h1 id="temperature">{Math.round(currentWeather?.main?.temp)}</h1>


        <h1 id="currentLocation">{currentWeather?.sys.country}</h1>
        <h3 id="currentCity">{currentWeather?.name}</h3>


        <div id="H-W-C">

          <section id="humidity">
            <h1 id="humidityVal">{`${currentWeather?.main?.humidity}%`}</h1>
            <h3 id="humidityWord">Humidity</h3>
          </section>


          <section id="wind">
            <h1 id="windVal">{`${Math.round(currentWeather?.wind?.speed)} km/h`}</h1>
            <h3 id="windWord">Wind Speed</h3>
          </section>
        </div> */}
      </div>
    </div>
  );
};

export default CurrentWeather;
