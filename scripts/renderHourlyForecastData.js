import { formatTime } from "./utils/formatTime";

export function renderHourlyForecastData(arrToday, unit) {
  const currentHour = new Date().getHours();
  const hourlyForecastContainer = document.querySelector(
    ".hourly-forecast__data"
  );
  let hourlyForecastHTML = "";

  const upcomingHours = arrToday.hour.filter((h) => {
    const hour = new Date(h.time).getHours();
    return hour >= currentHour;
  });

  console.log(upcomingHours);

  upcomingHours.forEach((hour) => {
    hourlyForecastHTML += `
      <div>
        <p>${formatTime(hour.time)}</p>
        <p>${unit === "c" ? hour.temp_c : hour.temp_f}°</p>
      </div>
    `;
  });

  hourlyForecastContainer.innerHTML = hourlyForecastHTML;
}
