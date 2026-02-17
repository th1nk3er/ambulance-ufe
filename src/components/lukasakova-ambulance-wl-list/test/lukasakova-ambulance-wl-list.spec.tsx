import { newSpecPage } from '@stencil/core/testing';
import { LukasakovaAmbulanceWlList } from '../lukasakova-ambulance-wl-list';

describe('lukasakova-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LukasakovaAmbulanceWlList],
      html: `<lukasakova-ambulance-wl-list></lukasakova-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <lukasakova-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lukasakova-ambulance-wl-list>
    `);
  });
});
