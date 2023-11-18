import React from "react";

const WeatherCard = ({ day }) => {
  const weatherIcon = {
    sunny: "/static/images/weather/sunny.png",
    rainy: "/static/images/weather/rainy.png",
    cloudy: "/static/images/weather/cloudy.png",
    snowy: "/static/images/weather/snowy.png",
  };

  return (
    <div className="weather-card">
      <h2>{day.date.toLocaleDateString()}</h2>
      <img
        src={weatherIcon[day.weatherCondition]}
        alt={day.weatherCondition}
        width="50"
        height="50"
      />
      <p>High: {day.highTemperature}°F</p>
      <p>Low: {day.lowTemperature}°F</p>
      <p>Humidity: {day.humidity}%</p>
      <p>Sunrise: {day.sunrise.toLocaleTimeString()}</p>
      <p>Sunset: {day.sunset.toLocaleTimeString()}</p>
    </div>
  );
};

export default WeatherCard;
