class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log("hola desde el constructor - memoria");
  }
  connectedCallback() {
    console.log("hola desde el DOM");
  }
  disconnectedCallback() {
    console.log("adios al DOM");
  }
}
customElements.define("my-custom-element", MyCustomElement);
document.querySelector("my-custom-element").remove();
