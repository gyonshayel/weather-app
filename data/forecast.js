import { renderFutureForecastData } from "../scripts/renderFutureForecastData";
import { renderHourlyForecastData } from "../scripts/renderHourlyForecastData";

export async function getHourlyForecastInfo(url, apiKey, query, unit) {
  const apiCall = `${url}?q=${query}&days=7&alerts=alerts%3Dno&aqi=aqi%3Dno&key=${apiKey}`;
  let forecastData = "";

  try {
    const response = await fetch(apiCall);
    if (!response.ok) {
      throw new Error("Data not found.");
    } else {
      forecastData = await response.json();
      console.log(forecastData); // Remove later

      renderHourlyForecastData(forecastData.forecast.forecastday, unit);
    }
  } catch (error) {
    alert(`Error fetching forecast data: ${error.message}`);
  }
}
