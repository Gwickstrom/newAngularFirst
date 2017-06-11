import { MyfirstPage } from './app.po';

describe('myfirst App', () => {
  let page: MyfirstPage;

  beforeEach(() => {
    page = new MyfirstPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
