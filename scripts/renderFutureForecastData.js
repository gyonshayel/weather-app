import { formatDate } from "./utils/formatDate";

export function renderFutureForecastData(arrDays, unit) {
  const futureForecastContainer = document.querySelector(
    ".future-forecast__data"
  );
  let futureForecastHTML = "";

  arrDays.forEach(({ date, day }) => {
    const { condition, maxtemp_c, maxtemp_f, mintemp_c, mintemp_f } = day;
    const icon = condition.icon;
    const imgAlt = condition.text;
    const hTemp = unit === "c" ? maxtemp_c : maxtemp_f;
    const lTemp = unit === "c" ? mintemp_c : mintemp_f;

    futureForecastHTML += `
      <div class="future-forecast__data-item">
        <h3 class="future-forecast__data-item__date">${formatDate(date)}</h3>
        <img class="future-forecast__data-item__icon" src="${icon}" alt="${imgAlt}" />
        <p class="future-forecast__data-item__temps">${lTemp}° - ${hTemp}°</p>
      </div>
      <hr>
  `;
  });

  futureForecastContainer.innerHTML = futureForecastHTML;
}
