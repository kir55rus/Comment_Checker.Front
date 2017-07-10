import { CommmentcheckerPage } from './app.po';

describe('commmentchecker App', () => {
  let page: CommmentcheckerPage;

  beforeEach(() => {
    page = new CommmentcheckerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
