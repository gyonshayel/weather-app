import { renderCurrentWeatherData } from "../scripts/renderCurrentWeatherData";

export async function getCurrentWeatherInfo(url, apiKey, query, unit) {
  const apiCall = `${url}?q=${query}&key=${apiKey}`;
  let weatherData = "";

  try {
    const response = await fetch(apiCall);
    if (!response.ok) {
      throw new Error("City not found.");
    } else {
      weatherData = await response.json();
      console.log(weatherData); // Remove later

      const name = weatherData.location.name;
      const temp =
        unit === "c" ? weatherData.current.temp_c : weatherData.current.temp_f;

      const condition = weatherData.current.condition.text;
      const hTemp =
        unit === "c" ? weatherData.current.temp_c : weatherData.current.temp_f;
      const lTemp =
        unit === "c" ? weatherData.current.temp_c : weatherData.current.temp_f;

      renderCurrentWeatherData(name, temp, condition, hTemp, lTemp);
    }
  } catch (error) {
    alert(`Error fetching weather data: ${error.message}`);
  }
}
