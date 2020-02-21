import { LitElement, html, css } from 'lit-element';

class AwesomePanel extends LitElement {
    static get styles() {
        return css`
          div { 
                max-width: 100%;
                max-height: 100%;
                padding: 1.5rem;
                background-color: #fff;
                background: linear-gradient(#f8f8f8, #fff);
                box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
                border-radius: 6px;
                overflow: hidden;
                position: relative;
                margin: 1.5rem;  
            }
        `;
    }

    render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('awesome-panel', AwesomePanel);