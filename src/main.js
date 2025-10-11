import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/weather-data.css";
import "../styles/utils.css";

async function getWeatherInfo() {
  const url = "http://api.weatherstack.com/current";
  const apiKey = "9d8315a37b402b7dcf67cba7aa57b80f";
  const weatherDataContainer = document.querySelector(".weather-data");
  let city = "New York";
  let html = "";
  let data = "";

  const apiCall = `${url}?access_key=${apiKey}&query=${city}`;

  try {
    const response = await fetch(apiCall);
    if (response.ok) {
      data = await response.json();
      console.log(data);

      html = `
        <h1 class="weather-data__city">${data.location.name}</h1>
        <h2 class="weather-data__temp">&nbsp;&nbsp;${data.current.temperature}°</h2>
        <p class="weather-data__summary">${data.current.weather_descriptions[0]}</p>
        <p class="weather-data__highlowtemp">H:${data.current.temperature}° L:${data.current.temperature}°</p>
      `;

      weatherDataContainer.innerHTML = html;
    } else {
      alert(`Error: ${data.error.info}`);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeatherInfo();
