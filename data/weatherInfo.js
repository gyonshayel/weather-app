import { renderCurrentWeatherData } from "../scripts/renderCurrentWeatherData";
import { renderHourlyForecastData } from "../scripts/renderHourlyForecastData";
import { renderFutureForecastData } from "../scripts/renderFutureForecastData";

export async function getWeatherInfo(url, apiKey, query, unit) {
  const apiCall = `${url}?q=${query}&days=7&alerts=alerts%3Dno&aqi=aqi%3Dno&key=${apiKey}`;
  let weatherData = "";

  try {
    const response = await fetch(apiCall);
    if (!response.ok) {
      throw new Error("City not found.");
    } else {
      weatherData = await response.json();
      console.log(weatherData); // Remove later

      renderCurrentWeatherData(
        weatherData.location,
        weatherData.current,
        weatherData.forecast.forecastday[0],
        unit
      );
      renderHourlyForecastData(weatherData.forecast.forecastday, unit);
    }
  } catch (error) {
    alert(`Error fetching weather data: ${error.message}`);
  }
}
