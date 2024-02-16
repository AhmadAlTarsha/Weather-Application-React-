import { React, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import "./style.css"
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6"
import { MdOutlineDescription } from "react-icons/md";
import { WiHumidity, WiStrongWind, WiBarometer } from "react-icons/wi";
import Loader from '../Loader/Loader';
import F_Loader from '../forecastLoader/F_Loader';





// this component represent all main page
const CurrentWeather = () => {
const [loader,setLoader]=useState(true)
const [forecastLoader,setForecastLoader]=useState(true)
  const [currentWeather, setCurrentWeather] = useState()
  const [forecast, setForecast] = useState()

  const getCurrentLocation = async () => {

    try {
      
return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
    } catch (error) {
      console.log(error);
    }
    
  }


 //get forecast from external api 
  const getForecast=async(currentCity)=>{
  
 await  axios.get(`https://api.weatherapi.com/v1/forecast.json?key=1612951226954bf0ada164306232012&q=${currentCity}&days=4&aqi=no&alerts=no`).then((res)=>{
    setForecastLoader(false)
      setForecast(res?.data?.forecast)
    }).catch((err)=>{
      setForecastLoader(true)
      console.error(err);
    })

  }



  // call axios function
  const callAxios = async (lat, lang) => {


    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=20df6ed2d3d499f39b1ec55b2f5a7406&units=metric`

  
   
    
    try {

      const result = await axios.get(url)
      setCurrentWeather(result?.data)
      if (result.data) {
        setLoader(false)
      getForecast(result?.data?.name)  
      
      }
     
      
      
    
    } catch (error) {
      console.log(`ERROR ====> ${ error}`);
    }

  }


 



// this hook To execute what is inside it before the renderer
  useEffect(() => {

    getCurrentLocation()
      .then(async (position) => {
    
        await callAxios(position?.coords?.latitude,position?.coords?.longitude)

      })
      .catch((error) => {
        console.error("Error getting location: " + error.message);
      });


   

    

  }, [])








  //this function to create next days container
const CreateDayForecast=()=>{
console.log(forecast);


 const day= forecast?.forecastday?.map((day,index)=>{
  console.log(day);
 return   <section className='forecast-day-info' key={index}>
<h4>{day?.date}</h4><img src={`${day?.day?.condition?.icon}`}/><p className='p'>{`Max ${Math.round(day?.day?.maxtemp_c)
} °C / Min ${Math.round(day?.day?.mintemp_c)
} °C `}</p>
    </section>
    })
return day
}



  return (
    <>{loader?<Loader/>: <div id="main-screen-con">
      <div id="all-info-con">
        <div id="current-weather-con">
           <h2>current Weather</h2>
          <div id='current-location-image-con' >
           
            <section id='temp-location'><h1 className='h1'>{currentWeather?.sys.country}
            </h1 ><h1 className="h1" >{currentWeather?.name}
            </h1><h1 className='h1'>{`${Math.round(currentWeather?.main?.temp)}°C`}</h1></section>
            <div>{<img id='c-w-img' src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@4x.png`} />}</div>
          </div>

          <div id='rest-info-con'>
            <dvi id="m-m-h-con">
              <section id='max'><FaTemperatureArrowUp size={30} color='red' />  <h3>{`${Math.round(currentWeather?.main?.temp_max)}°C`}</h3></section>
              <section id='min'><FaTemperatureArrowDown size={30} color='#4d7db6' /> <h3>{`${Math.round(currentWeather?.main?.temp_min)}°C`}</h3></section>
              <section id='humidity'><WiHumidity size={30} /> <h3>{`${Math.round(currentWeather?.main?.temp_max)} %`}</h3></section>

            </dvi>
            <dvi id="w-p-des-con">
              <section id='w-speed'><WiStrongWind size={30} color='red' />   <h3>{`${Math.round(currentWeather?.wind?.speed)} km/h`}</h3></section>
              <section id='pusher'><WiBarometer size={30} color='#4d7db6' /> <h3>{`${Math.round(currentWeather?.main?.pressure)} hPa`}</h3></section>
              <section id='w-des'><MdOutlineDescription size={30} /> <h3>{currentWeather?.weather[0]?.description
              }</h3></section>

            </dvi>
          </div >
        </div >
        <div id="forecast-con">
<h3>Forecast next Days</h3>
{forecastLoader?<div id='forecast-loader' >{ <F_Loader></F_Loader>}</div>:CreateDayForecast()}
        
        </div>



      </div>
    </div>}</>
   
  );
};

export default CurrentWeather;
