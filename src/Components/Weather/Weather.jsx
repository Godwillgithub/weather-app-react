import React, { useState } from 'react';
import './weather.css';
import search_icon  from '../Assets/search1.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png'
import rain_icon from '../Assets/rain.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import wind_icon from '../Assets/wind.png';


function Weather() {
  let api_key ='1b9978fe8fb3ce9e6be8588fac87fee4';

  const [wicon, setWicon] = useState(cloud_icon);


  const search = async() =>{
    const element =document.getElementsByClassName('CityInput')
    if(element[0].value==="")
    {
        return 0;
    }
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML= data.main.humidity + "%";
    wind[0].innerHTML= Math.floor(data.wind.speed)+ "km/h";
    temprature[0].innerHTML= Math.floor(data.main.temp)+ "C";
    location[0].innerHTML= data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
      setWicon(clear_icon);
    }
     else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
     {
      setWicon(cloud_icon);
     }
     else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
     {
      setWicon(drizzle_icon);
     }
     else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
     {
      setWicon(drizzle_icon);
     }
     else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
     {
      setWicon(rain_icon);
     }
     else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
     {
      setWicon(rain_icon);
     }
     else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
     {
      setWicon(cloud_icon);
     }
     else
     {
      setWicon(clear_icon);
     }
  }
  return (
    <div className='container' >
        <div className='top-bar'>
            <input type='text' className='CityInput' placeholder='search'/>
            <div className='search-icon'  onClick={()=>{search()}}>
                <img src={search_icon} alt='search-bar'  />
            </div>
        </div>
        <div className='weather-image'>
        <img  src={wicon} alt='cloud' className='weather-image1'/>
          <div className='weather-temp'>24 C</div>
          <div className='weather-location'>Langtang</div>
          <div className="data-container">
            <div className="element">
              <img src={humidity_icon} alt='' className='element1'/>
              <div className="data">
                <div className="humidity-percent">90%</div>
                <div className="text">humidity</div>
              </div>
            </div>
            <div className="element">
              <img src={wind_icon} alt='wind'/>
              <div className="data">
                <div className="wind-rate">64 km/h</div>
                <div className="text">wind speed</div>
              </div>
            </div>
          </div>
        </div>

    </div>
   
  )
}

export default Weather;
