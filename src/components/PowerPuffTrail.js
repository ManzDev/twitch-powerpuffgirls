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
        --background-detail-size: 240px;

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
        background-size: 300% 300%;
        background-repeat: repeat-y;
      }

      :host(.blossom) .container{
        background:
          linear-gradient(to bottom, var(--power-puff-color) 0, transparent 25%),
          linear-gradient(to bottom, transparent 10%,#F687C1 10% 60%, transparent 60%),
          linear-gradient(to bottom, transparent 5%,#F687C1 5% 30%, transparent 30%),
          linear-gradient(to bottom, transparent 35%,#F687C1 35% 70%, transparent 70%),
          linear-gradient(to bottom, transparent 10%,#F687C1 10% 65%, transparent 65%),
          linear-gradient(to bottom, transparent 65%,#F687C1 65% 75%, transparent 75%),
          linear-gradient(to bottom, transparent 75%,#F687C1 75% 95%, transparent 95%),
          linear-gradient(to bottom, transparent 80%,#F687C1 80% 98%, transparent 98%),
          linear-gradient(to bottom, transparent 70%,#F687C1 70% 98%, transparent 98%);
        background-size: 300% 300%, 
            30% var(--background-detail-size), 
            20% var(--background-detail-size), 
            25% var(--background-detail-size),
            20% var(--background-detail-size), 
            30% var(--background-detail-size),
            22% var(--background-detail-size), 
            28% var(--background-detail-size),
            20% var(--background-detail-size);
        background-repeat: repeat-y,
            repeat-y,
            repeat-y,
            repeat-y,
            repeat-y,
            repeat-y,
            repeat-y,
            repeat-y,
            repeat-y,
            repeat-y;
        background-position: 0 0, 10% 0, 60% 0, 58% 0, 95% 0, 
          10% 0, 55% 0, 10% 0, 92% 0;
        animation:
          shine 2s ease-in-out infinite alternate, tail-blossom 5s infinite linear;
      }

      @keyframes shine {
        from {
          box-shadow: 0 0 5px 8px #fff;
        }

        to {
          box-shadow: 0 0 5px 2px #fff;
        }
      }

      @keyframes tail-blossom{
        to{
            background-position: 0 0, 10% calc(var(--background-detail-size) * 6), 
              60% calc(var(--background-detail-size) * 6), 
              58% calc(var(--background-detail-size) * 6), 
              95% calc(var(--background-detail-size) * 6), 
              10% calc(var(--background-detail-size) * 6),
              55% calc(var(--background-detail-size) * 6),
              10% calc(var(--background-detail-size) * 6), 
              92% calc(var(--background-detail-size) * 6);  
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
