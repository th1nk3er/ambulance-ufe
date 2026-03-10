import { newE2EPage } from '@stencil/core/testing';

describe('lukasakova-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lukasakova-ambulance-wl-editor></lukasakova-ambulance-wl-editor>');

    const element = await page.find('lukasakova-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
