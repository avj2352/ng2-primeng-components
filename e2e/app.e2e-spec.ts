import { Ng2PrimePluralsightPage } from './app.po';

describe('ng2-prime-pluralsight App', () => {
  let page: Ng2PrimePluralsightPage;

  beforeEach(() => {
    page = new Ng2PrimePluralsightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
