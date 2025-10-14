import { renderCurrentWeatherData } from "../scripts/renderCurrentWeatherData";
import { renderHourlyForecastData } from "../scripts/renderHourlyForecastData";
import { renderFutureForecastData } from "../scripts/renderFutureForecastData";
import { uvIndex } from "../scripts/uvIndex";
import { feelsLike } from "../scripts/feelsLike";

export async function getWeatherInfo(url, apiKey, query, unit) {
  const apiCall = `${url}?q=${query}&days=7&alerts=alerts%3Dno&aqi=aqi%3Dno&key=${apiKey}`;

  try {
    const response = await fetch(apiCall);
    if (!response.ok) {
      throw new Error("City not found or invalid request.");
    }
    const weatherData = await response.json();
    renderWeather(weatherData, unit);
  } catch (error) {
    alert(`Error fetching weather data: ${error.message}`);
  }
}

function renderWeather(weatherData, unit) {
  const { location, current, forecast } = weatherData;
  const today = forecast?.forecastday?.[0];

  renderCurrentWeatherData(location, current, today, unit);
  renderHourlyForecastData(forecast.forecastday, unit);
  renderFutureForecastData(forecast.forecastday, unit);

  uvIndex(current.uv);
  feelsLike(current, unit);
}
