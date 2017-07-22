import { AngularWebpackDevServerPage } from './app.po';

describe('angular-webpack-dev-server App', () => {
  let page: AngularWebpackDevServerPage;

  beforeEach(() => {
    page = new AngularWebpackDevServerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
