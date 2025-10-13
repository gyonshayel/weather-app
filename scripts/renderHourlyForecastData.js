import { formatTime } from "./utils/formatTime";

export function renderHourlyForecastData(arrDays, unit) {
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
  const next24Hours = allHours.filter((h) => {
    const hour = new Date(h.time);
    return (
      hour > currentDate &&
      hour <= new Date(currentDate.getTime() + 1000 * 60 * 60 * 24)
    );
  });

  next24Hours.forEach(({ time, temp_c, temp_f }) => {
    hourlyForecastHTML += `
      <div class="hourly-forecast__data-item">
        <p class="hourly-forecast__data-item__time">${formatTime(time)}</p>
        <p class="hourly-forecast__data-item__temp">${
          unit === "c" ? temp_c : temp_f
        }°</p>
      </div>
    `;
  });

  hourlyForecastContainer.innerHTML = hourlyForecastHTML;
}
