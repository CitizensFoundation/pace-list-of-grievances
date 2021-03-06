import { html, fixture, expect } from '@open-wc/testing';

import '../your-grievances-app.js';

describe('YourGrievancesApp', () => {
  it('has page "main" by default', async () => {
    const el = await fixture(html`
      <your-grievances-app></your-grievances-app>
    `);

    expect(el.page).to.equal('main');
    expect(el.shadowRoot.querySelector('main')).lightDom.to.equal(`
      <page-main></page-main>
    `);
  });

  it('renders default fallback content', async () => {
    const el = await fixture(html`
      <your-grievances-app></your-grievances-app>
    `);
    el.page = undefined;

    expect(el.page).to.equal(undefined);
    expect(el.shadowRoot.querySelector('main')).lightDom.to.equal(`
      <page-main></page-main>
    `);
  });

  it('renders page-one if page property is set to pageOne', async () => {
    const el = await fixture(html`
      <your-grievances-app page="pageOne"></your-grievances-app>
    `);
    expect(el.shadowRoot.querySelector('main')).lightDom.to.equal(`
      <page-one></page-one>
    `);
  });

  it('changes the page if a menu link gets clicked', async () => {
    const el = await fixture(html`
      <your-grievances-app></your-grievances-app>
    `);
    el.shadowRoot.querySelectorAll('header a')[2].click();

    expect(el.page).to.equal('about');
  });

  it('matches the snapshot', async () => {
    const el = await fixture(html`
      <your-grievances-app></your-grievances-app>
    `);

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <your-grievances-app></your-grievances-app>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
