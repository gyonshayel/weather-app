export function renderComponent(selector, title, data) {
  const componentsContainer = document.querySelector(
    ".weather-data__components"
  );

  componentsContainer.innerHTML += `
    <component-card
          selector="${selector}"
          title="${title}"
          data1="${data}"
    ></component-card>
  `;
}
