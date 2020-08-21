class CustomTable extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('custom-table', CustomTable, { extends: 'div' })