export function renderComponent(selector, title, data0) {
  const componentsContainer = document.querySelector(
    ".weather-data__components"
  );

  const componentElement = document.createElement("component-card");
  componentElement.setAttribute("selector", selector);
  componentElement.setAttribute("title", title);
  componentElement.setAttribute("data0", data0);

  componentsContainer.appendChild(componentElement);
}
