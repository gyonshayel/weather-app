import { getWeatherInfo } from "../data/weatherInfo";
import { getUserLocation } from "./getUserLocation";
import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/components.css";
import "../styles/components/current-weather.css";
import "../styles/components/footer.css";
import "../styles/components/future-forecast.css";
import "../styles/components/header.css";
import "../styles/components/hourly-forecast.css";
import "../styles/utils.css";

const url = "https://api.weatherapi.com/v1/forecast.json";
const apiKey = "a2f2502d1a824f03b11191244251510";

const searchInput = document.getElementById("search");
const unit = document.getElementById("unit");
const searchBtn = document.getElementById("search-btn");

const getCity = () => searchInput.value.trim();

const handleSearch = (event) => {
  event.preventDefault();
  const city = getCity();

  if (!city) {
    searchInput.placeholder = "Please enter a city name";
    searchInput.focus();
    return;
  }
  getWeatherInfo(url, apiKey, city, unit.value);
};

const handleUnitChange = (event) => {
  const city = getCity();

  if (!city) {
    searchInput.placeholder = "Please enter a city name";
    searchInput.focus();
    return;
  }
  getWeatherInfo(url, apiKey, city, event.target.value);
};

searchBtn.addEventListener("click", handleSearch);
unit.addEventListener("change", handleUnitChange);

// Get user's location or load weather data for last searched location
getUserLocation(url, apiKey, unit);
