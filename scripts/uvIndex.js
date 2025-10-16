import { renderComponent } from "./renderComponent";

export function uvIndex(uv) {
  renderComponent("uv-index", "UV-Index", uv);

  const uvComponent = document.querySelector(".uv-index");

  const data1 = document.createElement("p");
  let textContent1 = "";
  const data2 = document.createElement("p");
  let textContent2 = "";

  if (uv >= 0 && uv <= 2) {
    textContent1 = "Low";
    textContent2 = "Low danger for the average person.";
  } else if (uv >= 3 && uv <= 5) {
    textContent1 = "Moderate";
    textContent2 = "Moderate risk of harm from unprotected sun exposure.";
  } else if (uv >= 6 && uv <= 7) {
    textContent1 = "High";
    textContent2 = "Protection against skin and eye damage is needed.";
  } else if (uv >= 8 && uv <= 10) {
    textContent1 = "Very High";
    textContent2 =
      "Very high risk of harm from unprotected sun exposure. Take extra precautions.";
  } else {
    textContent1 = "Extreme";
    textContent2 =
      "Extreme risk of harm. Avoid sun exposure between 10am and 4pm.";
  }

  data1.textContent = textContent1;
  data1.classList.add("component-data1");
  data2.textContent = textContent2;
  data2.classList.add("component-data2");

  uvComponent.append(data1, data2);
}
