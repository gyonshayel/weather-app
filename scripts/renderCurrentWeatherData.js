export function renderCurrentWeatherData(name, temp, condition, hTemp, lTemp) {
  const weatherDataContainer = document.querySelector(".weather-data");
  let weatherDataHTML = "";

  weatherDataHTML = `
        <h1 class="weather-data__city">${name}</h1>
        <h2 class="weather-data__temp">&nbsp;${temp}°</h2>
        <p class="weather-data__summary">${condition}</p>
        <p class="weather-data__highest-lowest-temp">H:${hTemp}° L:${lTemp}°</p>
      `;

  weatherDataContainer.innerHTML = weatherDataHTML;
}
