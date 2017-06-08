import { JorgeHResumePage } from './app.po';

describe('jorge-h-resume App', () => {
  let page: JorgeHResumePage;

  beforeEach(() => {
    page = new JorgeHResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
