import { ReviewReduxPage } from './app.po';

describe('review-redux App', () => {
  let page: ReviewReduxPage;

  beforeEach(() => {
    page = new ReviewReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
