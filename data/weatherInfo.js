import { renderCurrentWeatherData } from "../scripts/renderCurrentWeatherData";
import { renderHourlyForecastData } from "../scripts/renderHourlyForecastData";
import { renderFutureForecastData } from "../scripts/renderFutureForecastData";
import { renderComponent } from "../scripts/renderComponent";
import { formatTemp } from "../scripts/utils/formatTemp";

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

  renderComponent("uv-index", "UV-Index", current.uv);
  renderComponent(
    "feels-like",
    "Feels Like",
    `${formatTemp(
      weatherData.current.feelslike_c,
      weatherData.current.feelslike_f,
      unit
    )}`
  );
}
