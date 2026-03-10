import { newSpecPage } from '@stencil/core/testing';
import { LukasakovaAmbulanceWlApp } from '../lukasakova-ambulance-wl-app';

describe('lukasakova-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [LukasakovaAmbulanceWlApp],
      html: `<lukasakova-ambulance-wl-app base-path="/"></lukasakova-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("lukasakova-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [LukasakovaAmbulanceWlApp],
      html: `<lukasakova-ambulance-wl-app base-path="/ambulance-wl/"></lukasakova-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("lukasakova-ambulance-wl-list");
  });
});