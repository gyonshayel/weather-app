export function renderCurrentWeatherData(
  location,
  current,
  todayForecast,
  unit
) {
  const currentWeatherDataContainer = document.querySelector(
    ".current-weather-data"
  );
  let currentWeatherDataHTML = "";

  const name = location.name;
  const temp = unit === "c" ? current.temp_c : current.temp_f;

  const condition = current.condition.text;
  const hTemp =
    unit === "c" ? todayForecast.day.maxtemp_c : todayForecast.day.maxtemp_f;
  const lTemp =
    unit === "c" ? todayForecast.day.mintemp_c : todayForecast.day.mintemp_f;

  currentWeatherDataHTML = `
    <h1 class="current-weather-data__city">${name}</h1>
    <h2 class="current-weather-data__temp">&nbsp;${temp}°</h2>
    <p class="current-weather-data__summary">${condition}</p>
    <p class="current-weather-data__highest-lowest-temp">H:${hTemp}° L:${lTemp}°</p>
  `;

  currentWeatherDataContainer.innerHTML = currentWeatherDataHTML;
}
