import { formatDate } from "./utils/formatDate";
import { formatTemp } from "./utils/formatTemp";

export function renderFutureForecastData(arrDays, unit) {
  document.querySelector(".future-forecast__title").style.display = "block";
  const futureForecastContainer = document.querySelector(
    ".future-forecast__data"
  );

  if (!arrDays?.length) {
    futureForecastContainer.innerHTML = "<p>No forecast data available.</p>";
    return;
  }

  const fragment = document.createDocumentFragment();

  arrDays.forEach(({ date, day }, index) => {
    const { condition, maxtemp_c, maxtemp_f, mintemp_c, mintemp_f } = day;
    const icon = condition.icon;
    const imgAlt = condition.text;
    const hTemp = formatTemp(maxtemp_c, maxtemp_f, unit);
    const lTemp = formatTemp(mintemp_c, mintemp_f, unit);

    const item = document.createElement("div");
    item.className = "future-forecast__data-item";
    item.innerHTML = `
      <h3 class="future-forecast__data-item__date">${formatDate(date)}</h3>
      <img class="future-forecast__data-item__icon" src="${icon}" alt="${imgAlt}" />
      <p class="future-forecast__data-item__temps">${lTemp} - ${hTemp}</p>
    `;
    fragment.appendChild(item);

    if (index < arrDays.length - 1) {
      fragment.appendChild(document.createElement("hr"));
    }
  });

  futureForecastContainer.innerHTML = "";
  futureForecastContainer.appendChild(fragment);
}
