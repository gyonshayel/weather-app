export function renderCurrentWeatherData(
  objLocation,
  objCurrent,
  objTodayForecast,
  unit
) {
  const currentWeatherDataContainer = document.querySelector(
    ".current-weather-data"
  );
  let currentWeatherDataHTML = "";

  const name = objLocation.name;
  const temp = unit === "c" ? objCurrent.temp_c : objCurrent.temp_f;

  const condition = objCurrent.condition.text;
  const hTemp =
    unit === "c"
      ? objTodayForecast.day.maxtemp_c
      : objTodayForecast.day.maxtemp_f;
  const lTemp =
    unit === "c"
      ? objTodayForecast.day.mintemp_c
      : objTodayForecast.day.mintemp_f;

  currentWeatherDataHTML = `
    <h1 class="current-weather-data__city">${name}</h1>
    <h2 class="current-weather-data__temp">&nbsp;${temp}°</h2>
    <p class="current-weather-data__summary">${condition}</p>
    <p class="current-weather-data__highest-lowest-temp">H:${hTemp}° L:${lTemp}°</p>
  `;

  currentWeatherDataContainer.innerHTML = currentWeatherDataHTML;
}
