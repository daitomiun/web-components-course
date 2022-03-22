class tarjetaUniversal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="background">
        <h1>
          <slot name="img-title"></slot>
        </h1>
        <img src="https://github.com/degranda/curso-web-components/blob/main/Proyecto/imgs/nike-blue.png?raw=true"  alt="" class="shoe" />
      </div>
      <div class="text-container">
        <h2 class="title-name">
          <slot name="title-name"></slot>
        </h2>
        <h3 class="title-collection">
          <span class="title-category">
            <slot name="title-category"></slot>
          </span>
          <slot name="title-collection"></slot>
        </h3>
        <p class="text">
          <slot name="text"></slot>
        </p>
        <h2 class="title-price">
          <slot name="title-price"></slot>
          <span>
            <button class="button-buy">
              <slot name="button-buy"></slot>
            </button>
          </span>
        </h2>
      </div>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
      :host{
        --primary-color: #3D509A;
        font-family:  monospace;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      div {
        //border: 3px solid black;
        width: 100%;
        max-width: 25rem;
        height: 20rem;
      }
      .background{
        position:relative;
        box-sizing: border-box;
        background: var(--primary-color);
      }
      .background h1{
        padding:0.5rem;
        font-size: 4rem;
        font-style: italic;
        
      }
      .text-container{
        padding:.5rem;
        box-sizing: border-box;
      }
      .title-name{
        font-size: 2rem;
      }
      .title-collection{
        color:grey;
      }
      .shoe{
        position:absolute;
        top:65%;
        left:44%;
        transform:translate(-50%,-50%);
        width: 30rem;
        height: 24rem;
      }
      .button-buy{
        width:5rem;
        height:2.5rem;
        border:none;
        color: white;
        border-radius: 40px;
        background-color: var(--primary-color);
        margin-left: 50%;
        font-style: bold;
      }
      @media (min-width:1024px){
        .shoe{
          transform:translate(-50%,-50%) rotate(-30deg);
          top:60%;
        }
        .text{
          padding:0 0 0 .5rem
        }
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
customElements.define("tarjeta-universal", tarjetaUniversal);
