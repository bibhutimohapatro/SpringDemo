import { DemoClientPage } from './app.po';

describe('demo-client App', function() {
  let page: DemoClientPage;

  beforeEach(() => {
    page = new DemoClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
