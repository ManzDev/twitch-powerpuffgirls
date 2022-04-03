class PowerPuffBlossomBackHair extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --hair-width: 60%;
        --hair-height: calc(var(--width) * 0.5);

        display: flex;
        flex-direction: column;
        align-items: center;
        width: var(--hair-width);
        height: var(--hair-height);
        position: absolute;
        transform: translateY(150%);
        filter:
          drop-shadow(0 0 1px #000)
          drop-shadow(0 -2px 0 #000)
          drop-shadow(0 2px 0 #000)
          drop-shadow(2px 0 0 #000)
          drop-shadow(-2px 0 0 #000);
      }

      .square {
        width: 80%;
        height: 100%;
        background: var(--hair-color);
      }

      .semi-circle {
        --size: calc(var(--width) * 0.06);

        width: 100%;
        height: 50%;
        background: var(--hair-color);
        border-radius: 0 0 50% 50% / 0 0 90% 90%;
        transform: translateY(-5%);
      }

      .semi-circle::before,
      .semi-circle::after {
        content: "";
        width: var(--size);
        height: var(--size);
        background: transparent;
        box-shadow: 0 6px 0 var(--hair-color);
        border-radius: 50%;
        display: block;
        position: absolute;
        transform: translate(16%, -120%);
      }

      .semi-circle::after {
        transform: translate(-16%, -120%) scaleX(-1);
        right: 0;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PowerPuffBlossomBackHair.styles}</style>
    <div class="square"></div>
    <div class="semi-circle"></div>
    `;
  }
}

customElements.define("power-puff-blossom-back-hair", PowerPuffBlossomBackHair);
