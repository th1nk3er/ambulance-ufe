import { newE2EPage } from '@stencil/core/testing';

describe('lukasakova-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lukasakova-ambulance-wl-list></lukasakova-ambulance-wl-list>');

    const element = await page.find('lukasakova-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
