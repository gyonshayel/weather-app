import { getCurrentWeatherInfo } from "../data/weatherData";
import { getHourlyForecastInfo } from "../data/forecast";

import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/current-weather-data.css";
import "../styles/components/hourly-forecast.css";
import "../styles/components/components.css";
import "../styles/utils.css";

const currentUrl = "https://api.weatherapi.com/v1/current.json";
const forecastUrl = "https://api.weatherapi.com/v1/forecast.json";
const apiKey = "34f5a79bf8334a03ab9122836251210";
const searchInput = document.getElementById("search");
const unit = document.getElementById("unit");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  const city = searchInput.value.trim();

  if (!city) {
    searchInput.placeholder = "Please enter a city name";
  } else {
    getCurrentWeatherInfo(currentUrl, apiKey, city, unit.value);
    getHourlyForecastInfo(forecastUrl, apiKey, city, unit.value);
  }
});

unit.addEventListener("change", (event) => {
  const city = searchInput.value.trim();

  if (!city) {
    searchInput.placeholder = "Please enter a city name";
  } else {
    getCurrentWeatherInfo(currentUrl, apiKey, city, event.target.value);
    getHourlyForecastInfo(forecastUrl, apiKey, city, event.target.value);
  }
});
