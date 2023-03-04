import React, {useState} from "react";
import axios from 'axios';

import "./details.css";

export default function Details(props) {
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [pressure, setPressure] = useState(null);
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  

  axios.get(apiUrl).then(showTemperature);
  
    function showTemperature(response) {
    setHumidity(response.data.main.humidity);
    setPressure(response.data.main.pressure);
    setWind(response.data.wind.speed);
  }
  return (
    <div className="Details">
      <div className="humidity"> Humidity: {humidity} % </div>
      <div className="pressure"> Pressure: {pressure} </div>
      <div className="wind"> Wind speed: {Math.round(wind)} m/s </div>
    </div>
  );

}
