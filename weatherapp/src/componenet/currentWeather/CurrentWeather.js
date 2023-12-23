import { React, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import "./style.css"
import { AppContext } from '../../App';



const CurrentWeather = () => {
  const [userLocation, setUserLocation] = useState()

  const getCurrentLocation = async () => {
    return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  }

  const callAxios = async (lat, lang, cityName) => {

    let url = ''

    if (cityName) {
      url = ``
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=20df6ed2d3d499f39b1ec55b2f5a7406&units=metric`
    }
    try {
      const result = await axios.get(url)
      setUserLocation(result.data)
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






  return (
    <div id="m-s-c">
      <section id="currentLocationSection">
        <div id="searchContainer">

        </div>


        <div id="img-container">
          <img

          />
        </div>


        <h1 id="temperature">{Math.round(userLocation?.main?.temp)}</h1>


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
