import { newSpecPage } from '@stencil/core/testing';
import { LukasakovaAmbulanceWlList } from '../lukasakova-ambulance-wl-list';

describe('lukasakova-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LukasakovaAmbulanceWlList],
      html: `<lukasakova-ambulance-wl-list></lukasakova-ambulance-wl-list>`,
    });
      const wlList = page.rootInstance as LukasakovaAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
