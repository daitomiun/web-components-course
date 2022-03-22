const template = document.createElement("div");
template.innerHTML = `
  <p class="texto">hola mundo template inner html<p/>
  <p> ahora puedo poner mas html!!<p/>
  <style>
    p {
      color:blue;
    }
    .texto{
      color:red;
    }
  <style/>
  
`;

class myElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement("p");
  }
  connectedCallback() {
    this.p.textContent = "hola mundo!!";
    this.appendChild(this.p);
    this.appendChild(template);
  }
}

customElements.define("my-element", myElement);
