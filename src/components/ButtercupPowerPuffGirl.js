import "./PowerPuffGirl.js";
import "./PowerPuffTrail.js";

class ButtercupPowerPuffGirl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 225px;
        --height: calc(var(--width) + calc(var(--width) * 0.3));
        --power-puff-color: #63c253;
        --hair-color: #000;
        --trail-x: 150px;

        position: relative;
      }

      .hairbuns {
        width: 150%;
        height: 40%;
        display: flex;
        justify-content: space-between;
        transform: translate(-16%, 35%);
        position: absolute;
      }

      .hairbun {
        width: 50%;
        height: 100%;
        border-radius: 0 0 50% 50% / 0 0 100% 100%;
        background: #000;
        transform: translateX(10%) rotate(10deg);
      }

      .hairbun.right {
        transform: translateX(-10%) rotate(-10deg) scaleX(-1);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ButtercupPowerPuffGirl.styles}</style>
    <div class="container">
      <div class="hairbuns">
        <div class="left hairbun"></div>
        <div class="right hairbun"></div>
      </div>
      <power-puff-girl class="buttercup"></power-puff-girl>
      <power-puff-trail class="buttercup"></power-puff-trail>
    </div>`;
  }
}

customElements.define("buttercup-power-puff-girl", ButtercupPowerPuffGirl);
