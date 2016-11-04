import { WhatZonePage } from './app.po';

describe('what-zone App', function() {
  let page: WhatZonePage;

  beforeEach(() => {
    page = new WhatZonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
