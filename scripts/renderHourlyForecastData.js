import { formatTime } from "./utils/formatTime";
import { formatTemp } from "./utils/formatTemp";

export function renderHourlyForecastData(arrDays, unit) {
  document.querySelector(".hourly-forecast__title").style.display = "block";
  const hourlyForecastContainer = document.querySelector(
    ".hourly-forecast__data"
  );
  let hourlyForecastHTML = "";

  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  // today's hours and tomorrow's hours data
  const todayHours = arrDays[0].hour;
  const tomorrowHours = arrDays[1]?.hour || [];

  // combining both
  const allHours = [...todayHours, ...tomorrowHours];

  // getting only the next 24 hours from NOW
  const cutOff = new Date(currentDate.getTime() + 1000 * 60 * 60 * 24);
  const next24Hours = allHours.filter((h) => {
    const hour = new Date(h.time);
    return (
      hour.getHours() == currentHour || (hour > currentDate && hour <= cutOff)
    );
  });

  next24Hours.forEach(({ time, temp_c, temp_f, condition }) => {
    hourlyForecastHTML += `
      <div class="hourly-forecast__data-item">
        <p class="hourly-forecast__data-item__time">${formatTime(time)}</p>
        <img class="hourly-forecast__data-item__icon" src="${
          condition.icon
        }" alt="${condition.text}" />
        <p class="hourly-forecast__data-item__temp">${formatTemp(
          temp_c,
          temp_f,
          unit
        )}</p>
      </div>
    `;
  });

  hourlyForecastContainer.innerHTML = hourlyForecastHTML;
}
