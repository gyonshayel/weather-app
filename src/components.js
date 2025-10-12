// component-card
class ComponentCard extends HTMLElement {
  connectedCallback() {
    const selector = this.getAttribute("selector");
    const title = this.getAttribute("title");
    const data1 = this.getAttribute("data1");
    const data2 = this.getAttribute("data2");
    const data3 = this.getAttribute("data3");

    this.innerHTML = `
      <section class="${selector}">
        <div class="component">
          <h3 class="component-title">${title}</h3>
          <p class="component-data1">${data1}</p>
          <p class="component-data2">${data2}</p>
          <p class="component-data3">${data3}</p>
        </div>
      </section>
    `;
  }
}
customElements.define("component-card", ComponentCard);
// fill these variables from the attribute values in html. For the attribute values in the html tag, use javascript to dynamically add attribute and value.
