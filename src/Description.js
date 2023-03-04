import React, {useState} from "react";
import axios from 'axios';

import "./description.css";

export default function Description(props) {
 let [description, setDescription] = useState(null);

 let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
   axios.get(apiUrl).then(showTemperature);

   function showTemperature(response) {
    setDescription(response.data.weather[0].description);
  }

  return <div className="Description">{description}</div>;
}
