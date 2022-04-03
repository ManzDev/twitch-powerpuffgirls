class PowerPuffPonyTail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --ponytail-width: calc(var(--width) * 0.55);
        --ponytail-height: calc(var(--width) * 0.35);
        --hair-color: #fcdb04;
        --border-color: #000;
      }

      :host(.right) {
        transform: scaleX(-1);
      }

      .container {
        width: var(--ponytail-width);
        height: var(--ponytail-height);
        position: relative;
      }

      .hair {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        filter:
          drop-shadow(0 0 1px #000)
          drop-shadow(0 2px 0 #000)
          drop-shadow(0 -2px 0 #000)
          drop-shadow(2px 0 0 #000)
          drop-shadow(-2px 0 0 #000);
      }

      .circle {
        width: 70%;
        height: 100%;
        background: var(--hair-color);
        border-radius: 50%;
        position: absolute;
        right: 0;
      }

      .ball {
        --ball-size: calc(var(--ponytail-width) * 0.25);

        width: var(--ball-size);
        height: var(--ball-size);
        background: radial-gradient(#487497 55%, #4fb8e8 60%);
        border: 3px solid #000;
        border-radius: 50%;
        position: absolute;
        right: -20px;
        top: 18px;
      }

      .ball-2 {
        top: 25px;
      }

      .circle::after {
        content: "";
        display: block;
        width: 36%;
        height: 30%;
        position: absolute;
        z-index: 5;
        background: transparent;
        box-shadow: 0 12px 0 var(--hair-color);
        border-radius: 50%;
        transform: translate(-52%, 25%) rotate(10deg);
      }

      .semi-circle {
        width: 70%;
        height: 100%;
        background: var(--hair-color);
        border-radius: 50%;
        clip-path: polygon(100% 50%, 0 50%, 0 100%, 100% 100%);
        position: absolute;
        transform: translateX(15%) rotate(15deg);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PowerPuffPonyTail.styles}</style>
    <div class="container">
      <div class="ball ball-1"></div>
      <div class="hair">
        <div class="circle"></div>
        <div class="semi-circle"></div>
      </div>
      <div class="ball ball-2"></div>
    </div>`;
  }
}

customElements.define("power-puff-pony-tail", PowerPuffPonyTail);
