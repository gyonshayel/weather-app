// component-card
class ComponentCard extends HTMLElement {
  connectedCallback() {
    const selector = this.getAttribute("selector");
    const title = this.getAttribute("title");
    const data1 = this.getAttribute("data1");
    const data2 = this.getAttribute("data2");
    const data3 = this.getAttribute("data3");

    this.innerHTML = `
      <div class="${selector} component">
        <h3 class="component-title">${title}</h3>
        <p class="component-data1">${data1}</p>
      </div>
    `;
  }
}
customElements.define("component-card", ComponentCard);
// fill these variables from the attribute values in html. For the attribute values in the html tag, use javascript to dynamically add attribute and value.
