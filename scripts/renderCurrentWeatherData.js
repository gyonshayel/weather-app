export function renderCurrentWeatherData(
  objLocation,
  objCurrent,
  objTodayForecast,
  unit
) {
  const currentWeatherDataContainer = document.querySelector(
    ".current-weather-data"
  );

  const { name } = objLocation;
  const { temp_c, temp_f, condition } = objCurrent;
  const { day } = objTodayForecast;
  const { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f } = day;

  const temp = unit === "c" ? temp_c : temp_f;
  const hTemp = unit === "c" ? maxtemp_c : maxtemp_f;
  const lTemp = unit === "c" ? mintemp_c : mintemp_f;

  currentWeatherDataContainer.innerHTML = `
    <h1 class="current-weather-data__city">${name}</h1>
    <h2 class="current-weather-data__temp">&nbsp;${temp}°</h2>
    <p class="current-weather-data__summary">${condition.text}</p>
    <p class="current-weather-data__highest-lowest-temp">H:${hTemp}° L:${lTemp}°</p>
  `;
}
