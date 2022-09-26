import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/App.css";
import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loading";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temperature, setTemperature] = useState();

  useEffect(() => {
    // Esta es la función que se ejecuta cuando llega la información de nuestra ubicación
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      setCoords(obj);
    };

    // Esto hace el llamado a la API del navegador, para usar la ubicación actual
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  // ------------------ Petición del clima ------------------

  useEffect(() => {
    if (coords) {
      const APIKEY = "03f8a7fe38b4c6c19e1b7f7bede7db7e";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`;

      axios
        .get(URL)
        .then((res) => {
          const celsius = (res.data.main.temp - 273.15).toFixed(2);
          const fahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);
          setTemperature({ celsius, fahrenheit });
          setWeather(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);

  return (
    <div className="App">
      {weather ? (
        <WeatherCard weather={weather} temperature={temperature} />
      ) : (
        <Loading />
      )}
      <footer   className="credits">🤘🏽DISEÑADO POR DEVPOUL🥁</footer>
    </div>
  );
}

export default App;
