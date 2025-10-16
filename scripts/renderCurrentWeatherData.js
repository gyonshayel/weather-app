import { formatTemp } from "./utils/formatTemp";

const currentWeatherDataCity = document.querySelector(
  ".current-weather-data__city"
);
const currentWeatherDataTemp = document.querySelector(
  ".current-weather-data__temp"
);
const currentWeatherDataSummary = document.querySelector(
  ".current-weather-data__summary"
);
const currentWeatherDataHighestLowestTemp = document.querySelector(
  ".current-weather-data__highest-lowest-temp"
);

export function renderCurrentWeatherData(
  objLocation,
  objCurrent,
  objTodayForecast,
  unit
) {
  try {
    const { name } = objLocation;
    const { temp_c, temp_f, condition } = objCurrent;
    const { day } = objTodayForecast;
    const { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f } = day;

    const temp = formatTemp(temp_c, temp_f, unit);
    const hTemp = formatTemp(maxtemp_c, maxtemp_f, unit);
    const lTemp = formatTemp(mintemp_c, mintemp_f, unit);

    currentWeatherDataCity.textContent = name || "_";
    currentWeatherDataTemp.textContent = `\u00A0${temp}`;
    currentWeatherDataSummary.textContent = condition.text || "No data";
    currentWeatherDataHighestLowestTemp.textContent = `H:${hTemp}\u00A0\u00A0L:${lTemp}`;
  } catch (error) {
    console.error("Error rendering current weather:", error);
  }
}
