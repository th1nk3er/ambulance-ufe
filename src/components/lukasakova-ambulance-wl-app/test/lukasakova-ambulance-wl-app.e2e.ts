import { newE2EPage } from '@stencil/core/testing';

describe('lukasakova-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lukasakova-ambulance-wl-app></lukasakova-ambulance-wl-app>');

    const element = await page.find('lukasakova-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
