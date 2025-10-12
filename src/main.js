import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/weather-data.css";
import "../styles/utils.css";

const searchBtn = document.getElementById("search-btn");
const search = document.getElementById("search");

searchBtn.addEventListener("click", () => {
  const city = search.value.trim();

  if (!city) {
    search.placeholder = "Please enter a city name";
  } else {
    getWeatherInfo(city);
    search.value = "";
    search.placeholder = "Search for a city";
  }
});

async function getWeatherInfo(query) {
  const url = "https://api.weatherstack.com/current";
  const apiKey = "9d8315a37b402b7dcf67cba7aa57b80f";
  const weatherDataContainer = document.querySelector(".weather-data");
  let weatherDataHTML = "";
  let weatherData = "";

  const apiCall = `${url}?access_key=${apiKey}&query=${query}`;

  try {
    const response = await fetch(apiCall);
    if (!response.ok) {
      throw new Error("City not found.");
    } else {
      weatherData = await response.json();
      console.log(weatherData); // Remove later

      weatherDataHTML = `
        <h1 class="weather-data__city">${weatherData.location.name}</h1>
        <h2 class="weather-data__temp">&nbsp;${weatherData.current.temperature}°</h2>
        <p class="weather-data__summary">${weatherData.current.weather_descriptions[0]}</p>
        <p class="weather-data__highest-lowest-temp">H:${weatherData.current.temperature}° L:${weatherData.current.temperature}°</p>
      `;

      weatherDataContainer.innerHTML = weatherDataHTML;
    }
  } catch (error) {
    alert(`Error fetching weather data: ${error.message}`);
  }
}
