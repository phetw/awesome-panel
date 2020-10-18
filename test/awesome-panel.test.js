import { html, fixture, expect } from '@open-wc/testing';
import '../build/awesome-panel.js';

describe('awesome-panel', () => {
  it('can semantically compare light DOM trees', async () => {
    const el = await fixture(html`<awesome-panel header="Hello"><p>Light DOM</p></awesome-panel>`);
    expect(el).lightDom.to.equal('<p>Light DOM</p>');
  });
  it('can access shadow DOM', async () => {
    const el = await fixture(html`<awesome-panel header="Hello">Shadow DOM</awesome-panel>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
