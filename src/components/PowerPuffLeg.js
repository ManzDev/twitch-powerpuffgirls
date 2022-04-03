class PowerPuffLeg extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 30px;
        --height: 30px;

        width: var(--width);
        height: var(--height);
        background: #fff;
        box-shadow: 0 6px 0 #0005 inset;
        display: flex;
        border: 3px solid #000;
        position: relative;
        top: -3px;
      }

      :host(.up) {
        height: 90%;
        box-shadow: none;
        border-radius: 50%;
        transform: translate(5%, -40%);
      }

      .shoe {
        width: 120%;
        height: 100%;
        background: #000;
        border-radius: 0 0 50% 50%;
        position: absolute;
        transform: translate(-8%, 75%);

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .sock {
        background: #fff;
        width: 45%;
        height: 40%;
        border-radius: 0 0 50% 50%;
        clip-path: polygon(0 25%, 100% 25%, 100% 100%, 0 100%);
      }

      :host(.up) .shoe {
        transform: translate(-10%, 25%);
        border-radius: 15% 15% 50% 50%;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PowerPuffLeg.styles}</style>
    <div class="shoe">
      <div class="sock"></div>
    </div>`;
  }
}

customElements.define("power-puff-leg", PowerPuffLeg);
