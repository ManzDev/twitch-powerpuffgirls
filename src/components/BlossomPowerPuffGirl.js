import "./PowerPuffGirl.js";
import "./PowerPuffBlossomBackHair.js";
import "./PowerPuffTrail.js";

class BlossomPowerPuffGirl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 225px;
        --height: calc(var(--width) + calc(var(--width) * 0.3));
        --power-puff-color: #ec64ae;
        --hair-color: #f66718;
        --trail-x: 270px;

        position: relative;
        top: -5%;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .ribbons {
        width: 90%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        transform: translate(0, -90%);
        position: absolute;
      }

      .ribbon {
        background: #f13a1b;
        border: 3px solid #000;
        margin: 0 3%;
      }

      .ribbon:is(.left, .right) {
        border-radius: 50% 50% 40% 40% / 60% 80% 20% 40%;
        width: 30%;
        height: 70%;
        rotate: -5deg;
      }

      .ribbon.right {
        rotate: 5deg;
        transform: scaleX(-1);
      }

      .ribbon.middle {
        width: 15%;
        height: 15%;
        position: absolute;
        z-index: 5;
        border-radius: 50%;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BlossomPowerPuffGirl.styles}</style>
    <div class="container">
      <div class="ribbons">
        <div class="left ribbon"></div>
        <div class="middle ribbon"></div>
        <div class="right ribbon"></div>
      </div>
      <power-puff-blossom-back-hair></power-puff-blossom-back-hair>
      <power-puff-girl class="blossom"></power-puff-girl>
      <power-puff-trail class="blossom"></power-puff-trail>
    </div>`;
  }
}

customElements.define("blossom-power-puff-girl", BlossomPowerPuffGirl);
