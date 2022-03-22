class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>
          <slot name="title"></slot>
        </h2>
        <div>
          <p>
            <slot name="parrafo"></slot>
          </p>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
      :host{
        display: inline-block;
        width: 100%;
        min-width: 300px;
        max-width: 450px; 
        font-size: 20px;
        background: aliceblue;
      }
      :host(.blue){
        background:blue;
        color:white;
      }
      :host([yellow]){
        background: yellow;
      }
      :host([yellow]) h2{
        color:purple;
      }
      :host([yellow]) p{
        color:red;
      }

      :host-context(article.card)    {
        display: block;
        max-width: 100%; 
      }
    </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", myElement);
