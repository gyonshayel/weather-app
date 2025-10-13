export function renderComponent(selector, title, data) {
  const componentsContainer = document.querySelector(
    ".weather-data__components"
  );

  const componentElement = document.createElement("component-card");
  componentElement.setAttribute("selector", selector);
  componentElement.setAttribute("title", title);
  componentElement.setAttribute("data", data);

  componentsContainer.appendChild(componentElement);
}
