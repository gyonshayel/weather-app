// component-card
class ComponentCard extends HTMLElement {
  connectedCallback() {
    const selector = this.getAttribute("selector");
    const title = this.getAttribute("title");
    const data = this.getAttribute("data");

    this.innerHTML = `
      <div class="${selector} component">
        <h3 class="component-title">${title}</h3>
        <p class="component-data1">${data}</p>
      </div>
    `;
  }
}
customElements.define("component-card", ComponentCard);
