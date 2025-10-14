// component-card
class ComponentCard extends HTMLElement {
  connectedCallback() {
    const selector = this.getAttribute("selector");
    const title = this.getAttribute("title");
    const data0 = this.getAttribute("data0");

    this.innerHTML = `
      <div class="${selector} component">
        <h3 class="component-title">${title}</h3>
        <p class="component-data0">${data0}</p>
      </div>
    `;
  }
}
customElements.define("component-card", ComponentCard);
