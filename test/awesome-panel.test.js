import { html, fixture, expect } from '@open-wc/testing';
import '../build/awesome-panel.js';

describe('awesome-panel', () => {
  it('can semantically compare light DOM trees', async () => {
    const el = await fixture(html`<awesome-panel><h1>Light DOM</h1></awesome-panel>`);
    expect(el).lightDom.to.equal('<h1>Light DOM</h1>');
  });
  it('can access shadow DOM', async () => {
    const el = await fixture(html`<awesome-panel>Shadow DOM</awesome-panel>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
