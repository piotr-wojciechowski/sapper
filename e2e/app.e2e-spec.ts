import { SapperPage } from './app.po';

describe('sapper App', function() {
  let page: SapperPage;

  beforeEach(() => {
    page = new SapperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
