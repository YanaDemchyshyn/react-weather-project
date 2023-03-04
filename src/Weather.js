import React, {useState} from "react";
import axios from 'axios';

import "./weather.css";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [icon, setIcon] = useState(null);
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  if (props.city) {
    axios.get(apiUrl).then(showTemperature);

    function showTemperature(response) {
    setTemperature(response.data.main.temp);
    let iconCode = response.data.weather[0].icon;
    let iconLink = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    setIcon(iconLink);
    }
  return (
    <div className="Weather">
      <img
        src={icon}
        width="100px"
        className="Icon"
        alt="weather-icon"
      />
      <span className="Temperature">{Math.round(temperature)}°C</span>
    </div>
  );
}
}