import { getWeatherInfo } from "../data/weatherInfo";
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
const componentContainer = document.querySelector(".weather-data__components");

const getCity = () => searchInput.value.trim();

const handleSearch = (event) => {
  event.preventDefault();
  const city = getCity();

  if (!city) {
    searchInput.placeholder = "Please enter a city name";
    searchInput.focus();
    return;
  }
  localStorage.setItem("lastCity", city);
  componentContainer.innerHTML = ""; // Clear previous components
  getWeatherInfo(url, apiKey, city, unit.value);
};

const handleUnitChange = (event) => {
  const city = getCity();

  if (!city) {
    searchInput.placeholder = "Please enter a city name";
    searchInput.focus();
    return;
  }
  componentContainer.innerHTML = ""; // Clear previous components
  getWeatherInfo(url, apiKey, city, event.target.value);
};

searchBtn.addEventListener("click", handleSearch);
unit.addEventListener("change", handleUnitChange);

// Get the last searched city from local storage
// const savedCity = localStorage.getItem("lastCity");
// if (savedCity) {
//   searchInput.value = savedCity;
//   getWeatherInfo(url, apiKey, savedCity, unit.value);
// }
