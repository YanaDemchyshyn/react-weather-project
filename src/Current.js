import React from "react";
import "./date.css";

export default function Current (props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let newDate = new Date();
  let month = months[newDate.getMonth()];
  let day = days[newDate.getDay()];
  let date = newDate.getDate();
  let hour = newDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = newDate.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  return (
    <div className="Date">
      <div className="City-name">{props.city}</div>
      <div className="current-day">{day}, {date} of {month}</div>
      <div className="last-update">Last update: {hour}:{minute}</div>
    </div>
  );
}
