import { getElementError } from '@testing-library/react';
import './WeatherCard.css';

const WeatherCard = ({ city, info, getWeatherIcon }) => {
    return (
        <div className="weather__card">
            <div className="card__header">
                <div className="card__name">
                    {city.city + ' - ' + city.country}
                </div>
                <div id="card__data__icon">
                    {getWeatherIcon(info.weather[0].main)}
                </div>
            </div>
            <div className="card__data">
                <div className="card__data__fields">
                    <div><p>Temperature C </p><p>{Math.floor(info.main.temp - 273.15)} &deg;C</p></div>
                    <div><p>Temperature F </p><p>{Math.floor(info.main.temp * 9 / 5 - 459.67)} &deg;F</p></div>
                    <div><p>Temperature K </p><p>{info.main.temp} &deg;K</p></div>
                    <div><p>Wind speed    </p><p>{info.wind.speed.toFixed(1)} m/sec</p></div>
                </div>
            </div>

        </div>
    )
}

export default WeatherCard;