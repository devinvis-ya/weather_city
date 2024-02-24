import axios from 'axios';
import { useState } from 'react';
import './App.css';
import CityButton from './components/CityButton';
import WeatherCard from './components/WeatherCard';

import clear from "./weatherIcons/Clear.svg";
import clouds from "./weatherIcons/Clouds.svg";
import drizzle from "./weatherIcons/Drizzle.svg";
import rain from "./weatherIcons/Rain.svg";
import snow from "./weatherIcons/Snow.svg";
import thundestorm from "./weatherIcons/Thundestorm.svg";

const cityArray = [
  {
    city: 'Madrid',
    country: 'Spain',
    timeZone: 1,
    lat: 40.4165,
    lon: -3.7026
  },
  {
    city: 'Moscow',
    country: 'Russia',
    timeZone: 3,
    lat: 55.7522,
    lon: 37.6156
  },
  {
    city: 'New York',
    country: 'USA',
    timeZone: -5,
    lat: 40.7143,
    lon: -74.006
  }
]



function App() {

  const [currentCity, setCurrentCity] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const weatherIconSVG = (weather) => {
    let icon;
    switch (weather) {
      case "Clear":
        icon = clear;
        break;
      case "Clouds":
        icon = clouds;
        break;
      case "Drizzle":
        icon = drizzle;
        break;
      case "Rain":
        icon = rain;
        break;
      case "Snow":
        icon = snow;
        break;
      case "Thunderstorm":
        icon = thundestorm;
        break;
    }
    return <img id="weatherIcon" src={icon} alt={weather} title={weather}/>
  }

  async function getWeatherInfo(city) {
    setCurrentCity(city);
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${process.env.REACT_APP_TOKEN_API}`);
    setCurrentWeather(response.data)
  }

  return (
    <div className="wrapper">
      <h1>City's Weather</h1>
      <div className="nav">
        {cityArray.map((city) => <CityButton idStyle={currentCity?.city == city?.city ? "activeButton" : ""} 
                                             key={city.country} 
                                             cityInfo={city} 
                                             getWeather={getWeatherInfo} 
                                             getWeatherIcon={weatherIconSVG}/>)}
      </div>
      <div className="weather">
        {currentWeather ?
          <WeatherCard city={currentCity} info={currentWeather} getWeatherIcon={weatherIconSVG}/>
          :
          <div id="caption">Click on the city...</div>
        }
      </div>
    </div>
  );
}

export default App;
