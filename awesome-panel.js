import { LitElement, html } from 'lit-element';

class AwesomePanel extends LitElement {
    render() {
        return html`
            <p>A paragraph</p>
        `;
    }
}

customElements.define('awesome-panel', AwesomePanel);
