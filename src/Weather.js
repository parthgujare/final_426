import React from "react";
import axios from "axios";

const { useState } = React;

export default function Weather() {
  const [weather, setWeather] = useState([]);

  const fetchWeather = async () => {
    const result = await axios({
      method: "get",
      url: "https://api.openweathermap.org/data/2.5/weather?q=Chapel Hill,NC,US&appid=79e3410fd4ada658a94ae4b55d71064d",
    });

    setWeather(result.data.main.temp);
  };

  if (weather.length === 0) {
    fetchWeather();
  }

  return (
    <div>
      The weather in Chapel Hill is currently{" "}
      <strong>{Math.round(((weather - 273.15) * 9) / 5 + 32)}</strong>
      °F.
    </div>
  );
}
