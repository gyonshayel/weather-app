export function renderCurrentWeatherData(name, temp, condition, hTemp, lTemp) {
  const currentWeatherDataContainer = document.querySelector(
    ".current-weather-data"
  );
  let currentWeatherDataHTML = "";

  currentWeatherDataHTML = `
    <h1 class="current-weather-data__city">${name}</h1>
    <h2 class="current-weather-data__temp">&nbsp;${temp}°</h2>
    <p class="current-weather-data__summary">${condition}</p>
    <p class="current-weather-data__highest-lowest-temp">H:${hTemp}° L:${lTemp}°</p>
  `;

  currentWeatherDataContainer.innerHTML = currentWeatherDataHTML;
}
