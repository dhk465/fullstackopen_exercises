import axios from 'axios';
import { useEffect, useState } from 'react';

const Weather = ({ city, country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
      const apiGeoUrl = `http://api.openweathermap.org/geo/1.0/direct?appid=${apiKey}`;
      const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;

      const getGeolocation = async () => {
        const request = await axios.get(`${apiGeoUrl}&q=${city},${country}`);
        const responseArray = request.data;
        return responseArray[0];
      };

      const getWeather = async () => {
        const { lat, lon } = await getGeolocation();
        const request = await axios.get(`${apiWeatherUrl}&lat=${lat}&lon=${lon}`);
        return request.data;
      };

      const weatherData = await getWeather();
      setWeather(weatherData);
    };

    fetchWeather();
  }, [city, country]);

  if (!weather) {
    return <p>Loading...</p>;
  }
  
  const weatherIcon = weather.weather[0].icon;
  const temperature = weather.main.temp;
  const wind = weather.wind.speed;

  return (
    <>
      <h2>Weather in {city}</h2>
      <p>Temperature: {Math.round(((temperature - 273.15) + Number.EPSILON) * 100) / 100} °C </p>
      <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}/>
      <p>Wind: {wind} meter/sec </p>
    </>
  );
};

export default Weather;