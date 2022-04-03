class PowerPuffEye extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        width: calc(var(--width) * 0.65);
        height: 100%;
        background: #fff;
        border: var(--border-size) solid #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        overflow: hidden;
      }

      :host(.left) {
        transform: scaleX(-1);
      }

      .iris {
        width: 90%;
        height: 85%;
        border-radius: 50%;
        background: var(--power-puff-color);
        transform: translateX(calc(-1 * 15%));
        overflow: hidden;
        display: flex;
        align-items: center;
      }

      .pupil {
        width: 87%;
        height: 82%;
        background: #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
      }

      .shine {
        width: 34%;
        height: 32%;
        background: #fff;
        border-radius: 50%;
        transform: translateX(60%);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PowerPuffEye.styles}</style>
    <div class="iris">
      <div class="pupil">
        <div class="shine"></div>
      </div>
    </div>
    `;
  }
}

customElements.define("power-puff-eye", PowerPuffEye);
