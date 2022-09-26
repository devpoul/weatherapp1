import React, { useState } from "react";

const WeatherCard = ({ weather, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeTemp = () => setIsCelsius(!isCelsius);

  console.log(weather);

  return (
    <article className="card">
      <h1 className="cardTitle">Weather App</h1>
      <h2 className="cardPlace">{`${weather?.name}, ${weather?.sys.country}`}</h2>
      <section className="card1Section">
        <img
          className="cardIcon"
          src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
          alt=""
        />
        <h3 className="temp">Temperature</h3>
        <h2 className="mainTemp">
          {isCelsius
            ? `${temperature?.celsius} °C`
            : `${temperature?.fahrenheit} °F`}
        </h2>
      </section>

      <section className="card2Section">
        <h3 className="cardDescription">"{weather?.weather[0].description}"</h3>
        <ul className="listInfo">
          <li className="listItem">
            <span className="spanItem">Wind Speed: </span>
            {weather?.wind.speed} m/s
          </li>
          <li className="listItem">
            <span className="spanItem">Clouds: </span>
            {weather?.clouds.all}%
          </li>
          <li className="listItem">
            <span className="spanItem">Pressure: </span>
            {weather?.main.pressure} hPa
          </li>
          <li className="listItem">
            <span className="spanItem">Humidity: </span>
            {weather?.main.humidity} %
          </li>
        </ul>
        <button className="cardBtn" onClick={changeTemp}>
          {isCelsius ? "Change to °F" : "Change to °C"}
        </button>
      </section>
    </article>
  );
};

export default WeatherCard;
