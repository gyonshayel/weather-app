export function renderFutureForecastData(arrDays, unit) {
  const futureForecastContainer = document.querySelector(
    ".future-forecast__data"
  );
  let futureForecastHTML = "";

  arrDays.forEach((arrDay) => {
    const date = arrDay.date;
    const icon = arrDay.day.condition.icon;
    const imgAlt = arrDay.day.condition.text;
    const hTemp = unit === "c" ? arrDay.day.maxtemp_c : arrDay.day.maxtemp_f;
    const lTemp = unit === "c" ? arrDay.day.mintemp_c : arrDay.day.mintemp_f;

    futureForecastHTML += `
      <div class="future-forecast__data-item">
        <h3 class="future-forecast__data-item__date">${date}</h3>
        <img class="future-forecast__data-item__icon" src="${icon}" alt="${imgAlt}" />
        <p class="future-forecast__data-item__temps">${lTemp}° - ${hTemp}°</p>
      </div>
      <hr>
  `;
  });

  futureForecastContainer.innerHTML = futureForecastHTML;
}
