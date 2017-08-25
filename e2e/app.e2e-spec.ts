import { VESWebAppPage } from './app.po';

describe('vesweb-app App', () => {
  let page: VESWebAppPage;

  beforeEach(() => {
    page = new VESWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
