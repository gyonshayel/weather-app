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
const apiKey = "34f5a79bf8334a03ab9122836251210";

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

// Handle scroll
const hourlyForecastData = document.querySelector(".hourly-forecast__data");
const btnLeft = document.querySelector(".scroll-btn.left");
const btnRight = document.querySelector(".scroll-btn.right");

btnLeft.addEventListener("click", () => {
  hourlyForecastData.scrollBy({ left: -150, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  hourlyForecastData.scrollBy({ left: 150, behavior: "smooth" });
});

searchBtn.addEventListener("click", handleSearch);
unit.addEventListener("change", handleUnitChange);

const savedCity = localStorage.getItem("lastCity");
if (savedCity) {
  searchInput.value = savedCity;
  getWeatherInfo(url, apiKey, savedCity, unit.value);
}
