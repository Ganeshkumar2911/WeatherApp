import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp () {

    const[weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 23.27,
        humidity: 47.8,
        temp: 24.05,
        tempMax: 24.05,
        tempMin: 24.05,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h2 style={{textAlign: "center"}}>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
