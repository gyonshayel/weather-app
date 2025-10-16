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

  data1.textContent = "\u00A0";
  data1.classList.add("component-data1");
  data2.textContent = feelsLikeText(current.feelslike_c, current.temp_c);
  data2.classList.add("component-data2");

  feelsLikeComponent.append(data1, data2);
}

function feelsLikeText(feelslike_c, temp_c) {
  let textContent = "";
  const feelsLike = Math.round(feelslike_c);
  const currentTemp = Math.round(temp_c);

  if (feelsLike > currentTemp) {
    return (textContent = "It feels hotter than the actual temperature.");
  } else if (feelsLike < currentTemp) {
    return (textContent = "It feels colder than the actual temperature.");
  } else {
    return (textContent = "Similar to the actual temperature.");
  }
}
