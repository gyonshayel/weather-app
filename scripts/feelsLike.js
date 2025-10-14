import { renderComponent } from "./renderComponent";
import { formatTemp } from "./utils/formatTemp";

export function feelsLike(current, unit) {
  renderComponent(
    "feels-like",
    "Feels Like",
    `${formatTemp(current.feelslike_c, current.feelslike_f, unit)}`
  );

  const feelsLikeComponent = document.querySelector(".feels-like");

  const data1 = document.createElement("p");
  const data2 = document.createElement("p");
  let textContent2 = "";

  if (current.feelslike_c > current.temp_c) {
    textContent2 = "It feels hotter than the actual temperature";
  } else if (current.feelslike_c < current.temp_c) {
    textContent2 = "It feels colder than the actual temperature";
  } else {
    textContent2 = "\u00A0";
  }

  data1.textContent = "\u00A0";
  data1.classList.add("component-data1");
  data2.textContent = textContent2;
  data2.classList.add("component-data2");

  feelsLikeComponent.append(data1, data2);
}
