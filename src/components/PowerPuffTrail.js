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

      :host(.bubbles) .container{
        background:
          linear-gradient(to bottom, var(--power-puff-color) 0, transparent 25%),
          radial-gradient(20px 50px at 20% 25px, #39C6F1 50%, transparent 0),
          radial-gradient(15px 40px at 25% 80px, #A0E5F0 50%, transparent 0),
          radial-gradient(30px 50px at 35% 140px, #39C6F1 50%, transparent 0),
          radial-gradient(30px 40px at 20% 200px, #A0E5F0 50%, transparent 0),
          radial-gradient(40px 60px at 60% 30px, #A0E5F0 50%, transparent 0),
          radial-gradient(22px 22px at 50% 80px, #39C6F1 50%, transparent 0),
          radial-gradient(20px 40px at 80% 80px, #A0E5F0 50%, transparent 0),
          radial-gradient(12px 12px at 50% 110px, #39C6F1 50%, transparent 0),
          radial-gradient(30px 50px at 75% 140px, #39C6F1 50%, transparent 0),
          radial-gradient(40px 40px at 70% 200px, #39C6F1 50%, transparent 0);
          background-size: 300% 300%, 
            100% var(--background-detail-size), 
            100% var(--background-detail-size), 
            100% var(--background-detail-size), 
            100% var(--background-detail-size), 
            100% var(--background-detail-size), 
            100% var(--background-detail-size), 
            100% var(--background-detail-size), 
            100% var(--background-detail-size), 
            100% var(--background-detail-size), 
            100% var(--background-detail-size);
          animation:
            shine 2s ease-in-out infinite alternate, tail-bubbles 5s infinite linear;            
      }

      :host(.buttercup) .container{
        background: linear-gradient(to bottom, #63c253 0, transparent 100%),
          linear-gradient(35deg, transparent 55%,#9DDA46 55% 75%, transparent 75%),
          linear-gradient(-35deg, transparent 25%,#9DDA46 25% 45%, transparent 45%);
        background-position: 0 0,0 0,0 0;
        background-size: 300% 300%,
          100% var(--background-detail-size), 
          100% var(--background-detail-size);;
        animation:
            shine 2s ease-in-out infinite alternate, tail-buttercup 5s infinite linear;   
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

      @keyframes tail-bubbles{
        to{
            background-position: 0 0 ,
              0 calc(var(--background-detail-size) * 6),
              0 calc(var(--background-detail-size) * 6),
              0 calc(var(--background-detail-size) * 6),
              0 calc(var(--background-detail-size) * 6),
              0 calc(var(--background-detail-size) * 6),
              0 calc(var(--background-detail-size) * 6),
              0 calc(var(--background-detail-size) * 6),
              0 calc(var(--background-detail-size) * 6),
              0 calc(var(--background-detail-size) * 6),
              0 calc(var(--background-detail-size) * 6),
              0 calc(var(--background-detail-size) * 6);
        }
      }

      @keyframes tail-buttercup{
        to{
            background-position: 0 0 ,
            0 calc(var(--background-detail-size) * 6),
            0 calc(var(--background-detail-size) * 6);
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
