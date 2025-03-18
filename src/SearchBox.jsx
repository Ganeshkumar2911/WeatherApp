import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import { Try } from '@mui/icons-material';
import { colors } from '@mui/material';

export default function SearchBox ( { updateInfo } ) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);
     
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const KEY = "c79c2629799fdf5dbe396fecd05ee587";

    let getWeatherInfo = async () => {
        try {
            let responce = await fetch(`${URL}?q=${city}&appid=${KEY}&units=metric`);
            let jsonResponce = await responce.json();
            let result = {
                city: city,
                temp: jsonResponce.main.temp,
                tempMin: jsonResponce.main.temp_min,
                tempMax: jsonResponce.main.temp_max,
                humidity: jsonResponce.main.humidity,            
                feelsLike: jsonResponce.main.feels_like,
                weather: jsonResponce.weather[0].description,
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handelChange = (evt) => {
        setCity(evt.target.value);
    }

    let handelSubmit = async (evt) => {
        try {
            evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch (err) {
            setErr(true);
        }
    }

    return ( 
        <div className='SearchBox'>
            <form onSubmit={handelSubmit}>
            <TextField 
                id="city"
                value={city} 
                label="City" 
                variant="outlined" 
                required
                onChange={handelChange}
            />
            <br></br>
            <br></br>
            <Button type='submit' variant="contained">
                Search
            </Button>

            {/* {err && <p style={{color: "red"}}>No such data available</p>} */}

            </form>
        </div>
    )
};