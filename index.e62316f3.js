const b=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&f(i)}).observe(document,{childList:!0,subtree:!0});function u(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function f(t){if(t.ep)return;t.ep=!0;const e=u(t);fetch(t.href,e)}};b();class o extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${o.styles}</style>
    <div class="iris">
      <div class="pupil">
        <div class="shine"></div>
      </div>
    </div>
    `}}customElements.define("power-puff-eye",o);class a extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="shoe">
      <div class="sock"></div>
    </div>`}}customElements.define("power-puff-leg",a);class s extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --skin-color: #f4cfb4;
        --border-size: 3px;

        position: relative;
      }

      .container {
        width: var(--width);
        height: var(--height);
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .head {
        width: 100%;
        height: 65%;
        border: var(--border-size) solid #000;
        border-radius: 50%;
        overflow: hidden;
        background: var(--skin-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        box-shadow: 0 3px 0 #0005;
        z-index: 5;
      }

      .hair-container {
        width: 100%;
        height: 40%;
        position: absolute;
        z-index: 10;
        filter:
          drop-shadow(0 0 1px #000)
          drop-shadow(0 3px #000);
      }

      .lid {
        display: none;
      }

      :host(.bubbles) .hair {
        width: 100%;
        height: 100%;
        background:
          radial-gradient(ellipse 175px 150px at 15% -25%, var(--hair-color) 50%, transparent 51%),
          radial-gradient(ellipse 175px 150px at 85% -25%, var(--hair-color) 50%, transparent 51%);
      }

      :host(.blossom) .hair {
        width: 100%;
        height: 70%;
        background: var(--hair-color);
        clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%, 85% 100%, 75% 60%, 75% 100%, 60% 100%, 50% 45%, 40% 100%, 25% 100%, 25% 60%, 15% 100%);
      }

      :host(.buttercup) .hair {
        width: 100%;
        height: 70%;
        background: var(--hair-color);
        border-radius: 0% 0% 50% 50% / 0% 0% 20% 20%;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 53% 100%, 50% 45%, 47% 100%, 0 100%);
      }

      :host(.buttercup)::after {
        content: "";
        display: block;
        width: calc(var(--width) * 0.2);
        height: calc(var(--width) * 0.2);
        background: #000;
        position: absolute;
        top: 0;
        clip-path: polygon(20% 100%, 10% 30%, 35% 45%, 46% 10%, 90% 100%);
        transform: translate(250%, -75%) rotate(10deg);
      }

      .eyes {
        --gap: 10%;

        display: flex;
        justify-content: space-between;
        gap: 0 var(--gap);
        width: calc(var(--width) * 1.2);
        height: calc(var(--width) * 0.6);
        transform: translateY(10%);
      }

      :host(.buttercup) .lid {
        display: block;
        width: 50%;
        height: 20%;
        background: var(--skin-color);
        position: absolute;
        border-bottom: 2px solid #000;
      }

      :host(.buttercup) .left.lid {
        transform: translate(5%, 50%) rotate(30deg);
        z-index: 5;
      }

      :host(.buttercup) .left.lid::after,
      :host(.buttercup) .right.lid::after {
        content: "";
        display: block;
        width: 1.5%;
        height: 40%;
        background: #000;
        position: absolute;
        bottom: -2px;
        right: 2px;
        transform: rotate(-35deg);
      }

      :host(.buttercup) .right.lid::after {
        left: 2px;
        transform: rotate(35deg);
      }

      :host(.buttercup) .right.lid {
        transform: translate(95%, 50%) rotate(-30deg);
        z-index: 5;
      }

      .mouth {
        width: 6%;
        height: 8%;
        border-radius: 50%;
        border: var(--border-size) solid #000;
        clip-path: polygon(0 100%, 100% 100%, 100% 50%, 0 50%);
      }

      .arms {
        --arm-height: calc(var(--height) * 0.22);

        position: absolute;
        width: var(--width);
        height: var(--arm-height);
        transform: translateY(calc(2 * var(--arm-height)));
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }

      .arm {
        --rotate: 7deg;

        width: 40%;
        height: 35%;
        border-radius: 20px;
        border: var(--border-size) solid #000;
        background: var(--skin-color);
      }

      :host(.bubbles) .arm {
        transform: rotate(var(--rotate));
      }

      :host(.bubbles) .arm.right {
        transform: rotate(calc(-1 * var(--rotate)));
      }

      :host(.blossom) .arm {
        --rotate: -20deg;

        transform: rotate(var(--rotate));
      }

      :host(.blossom) .arm.right {
        --rotate: -80deg;

        transform: translate(20%, -500%) rotate(var(--rotate));
      }

      :host(.buttercup) .arm {
        --rotate: -55deg;

        transform: translate(-10%, -45%) rotate(var(--rotate));
      }

      :host(.buttercup) .arm.right {
        --rotate: 55deg;

        transform: translate(10%, -45%) rotate(var(--rotate));
      }

      .body-container {
        width: 30%;
        height: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        filter:
          drop-shadow(2px 0 0 #000)
          drop-shadow(-2px 0 0 #000)
          drop-shadow(0 -2px 0 #000)
          drop-shadow(0 2px 0 #000);
        transform: translateY(-5%);
        position: relative;
      }

      .body-container .body {
        width: 100%;
        height: 100%;
        clip-path: polygon(8% 0, 92% 0, 100% 100%, 0 100%);
        background:
        linear-gradient(
          to bottom,
          var(--power-puff-color) 0 27%,
          #000 28% 71%,
          var(--power-puff-color) 72% 100%
        );
      }

      .legs {
        width: 32%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        z-index: 2;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
    <div class="container">
      <div class="head">
        <div class="hair-container">
          <div class="hair"></div>
        </div>
        <div class="eyes">
          <div class="left lid"></div>
          <div class="right lid"></div>
          <power-puff-eye class="left"></power-puff-eye>
          <power-puff-eye class="right"></power-puff-eye>
        </div>
        <div class="mouth"></div>
      </div>
      <div class="arms">
        <div class="left arm"></div>
        <div class="right arm"></div>
      </div>
      <div class="body-container">
        <div class="body"></div>
      </div>
      <div class="legs">
        <power-puff-leg class="left"></power-puff-leg>
        <power-puff-leg class="right up"></power-puff-leg>
      </div>
    </div>`}}customElements.define("power-puff-girl",s);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <div class="ball ball-1"></div>
      <div class="hair">
        <div class="circle"></div>
        <div class="semi-circle"></div>
      </div>
      <div class="ball ball-2"></div>
    </div>`}}customElements.define("power-puff-pony-tail",l);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
    </div>`}}customElements.define("power-puff-trail",d);class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container">
      <div class="ponytails">
        <power-puff-pony-tail class="left"></power-puff-pony-tail>
        <power-puff-pony-tail class="right"></power-puff-pony-tail>
      </div>
      <power-puff-girl class="bubbles"></power-puff-girl>
      <power-puff-trail></power-puff-trail>
    </div>`}}customElements.define("bubbles-power-puff-girl",n);class h extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <div class="square"></div>
    <div class="semi-circle"></div>
    `}}customElements.define("power-puff-blossom-back-hair",h);class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">
      <div class="ribbons">
        <div class="left ribbon"></div>
        <div class="middle ribbon"></div>
        <div class="right ribbon"></div>
      </div>
      <power-puff-blossom-back-hair></power-puff-blossom-back-hair>
      <power-puff-girl class="blossom"></power-puff-girl>
      <power-puff-trail></power-puff-trail>
    </div>`}}customElements.define("blossom-power-puff-girl",c);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">
      <div class="hairbuns">
        <div class="left hairbun"></div>
        <div class="right hairbun"></div>
      </div>
      <power-puff-girl class="buttercup"></power-puff-girl>
      <power-puff-trail></power-puff-trail>
    </div>`}}customElements.define("buttercup-power-puff-girl",p);
