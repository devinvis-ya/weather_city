import './CityButton.css';

const CityButton = ({cityInfo, getWeather, idStyle}) => {
    return (
        <div id={idStyle} className="nav__cityButton" onClick={() => getWeather(cityInfo)}>
            <div className="cityButton__name">
                {cityInfo.city}
            </div>
        </div>
    )
}

export default CityButton;