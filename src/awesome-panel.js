import { LitElement, html, css } from 'lit-element';

class AwesomePanel extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 1.5rem;
        background-color: #fff;
        box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
        border-radius: 6px;
        margin: 1.5rem;
      }
      h1 {
        margin: 0 0 1rem 0;
      }
    `;
  }

  static get properties() {
    return {
      header: { type: String },
    };
  }

  render() {
    return html`
      <h1>${this.header}</h1>
      Feature
            Feature
                  Feature
                        Feature
                              Feature
      <slot></slot>
    `;
  }
}

customElements.define('awesome-panel', AwesomePanel);
