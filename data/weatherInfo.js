import {
  showLoadingSpinner,
  hideLoadingSpinner,
} from "../scripts/loadingSpinner";
import { renderCurrentWeatherData } from "../scripts/renderCurrentWeatherData";
import { handleScroll } from "../scripts/handleScroll";
import { renderHourlyForecastData } from "../scripts/renderHourlyForecastData";
import { renderFutureForecastData } from "../scripts/renderFutureForecastData";
import { uvIndex } from "../scripts/uvIndex";
import { feelsLike } from "../scripts/feelsLike";

export async function getWeatherInfo(url, apiKey, query, unit) {
  const apiCall = `${url}?q=${query}&days=7&alerts=alerts%3Dno&aqi=aqi%3Dno&key=${apiKey}`;

  try {
    showLoadingSpinner();
    const response = await fetch(apiCall);
    if (!response.ok) throw new Error("City not found or invalid request.");

    const weatherData = await response.json();
    renderWeather(weatherData, unit);
    localStorage.setItem("lastCity", weatherData.location.name); // Save last searched location to the local storage
    return weatherData;
  } catch (error) {
    alert(`Error fetching weather data: ${error.message}`);
  } finally {
    hideLoadingSpinner();
  }
}

function renderWeather(weatherData, unit) {
  const { location, current, forecast } = weatherData || {};
  if (!location || !current || !forecast?.forecastday?.length) {
    console.error("Incomplete weather data received:", weatherData);
    alert("Could not retrieve complete weather information.");
  }
  const today = forecast.forecastday[0];

  renderCurrentWeatherData(location, current, today, unit);
  handleScroll();
  renderHourlyForecastData(forecast.forecastday, unit);
  renderFutureForecastData(forecast.forecastday, unit);

  const componentContainer = document.querySelector(
    ".weather-data__components"
  );
  componentContainer.innerHTML = ""; // Clear previous components
  uvIndex(Math.round(current.uv));
  feelsLike(current, unit);
}
