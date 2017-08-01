import { SevenwondersPage } from './app.po';

describe('sevenwonders App', function() {
  let page: SevenwondersPage;

  beforeEach(() => {
    page = new SevenwondersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
