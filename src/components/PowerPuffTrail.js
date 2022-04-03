class PowerPuffTrail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 100%;
        --height: 100vh;

        width: var(--width);
        height: var(--height);
        display: flex;
        justify-content: center;
        position: absolute;
        z-index: -1;
        top: 45%;
      }

      .container {
        width: 60%;
        height: 100%;
        background:
          linear-gradient(to bottom, var(--power-puff-color) 0, transparent 25%);
        background-size: 300% 300%;

        animation:
          shine 2s ease-in-out infinite alternate;
      }

      @keyframes shine {
        from {
          box-shadow: 0 0 5px 8px #fff;
        }

        to {
          box-shadow: 0 0 5px 2px #fff;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PowerPuffTrail.styles}</style>
    <div class="container">
    </div>`;
  }
}

customElements.define("power-puff-trail", PowerPuffTrail);
