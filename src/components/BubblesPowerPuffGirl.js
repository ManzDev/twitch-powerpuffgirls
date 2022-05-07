import "./PowerPuffGirl.js";
import "./PowerPuffPonyTail.js";
import "./PowerPuffTrail.js";

class BubblesPowerPuffGirl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 225px;
        --height: calc(var(--width) + calc(var(--width) * 0.3));
        --power-puff-color: #53a7e7;
        --hair-color: #fcdb04;
        --trail-x: 0;

        position: relative;
      }

      .ponytails {
        width: 150%;
        height: 30%;
        display: flex;
        justify-content: space-between;
        transform: translate(-16%, -40%);
        position: absolute;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BubblesPowerPuffGirl.styles}</style>
    <div class="container">
      <div class="ponytails">
        <power-puff-pony-tail class="left"></power-puff-pony-tail>
        <power-puff-pony-tail class="right"></power-puff-pony-tail>
      </div>
      <power-puff-girl class="bubbles"></power-puff-girl>
      <power-puff-trail class="bubbles"></power-puff-trail>
    </div>`;
  }
}

customElements.define("bubbles-power-puff-girl", BubblesPowerPuffGirl);
