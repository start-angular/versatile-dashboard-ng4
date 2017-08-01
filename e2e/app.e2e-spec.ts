import { VersatileDashboardThemePage } from './app.po';

describe('versatile-dashboard-theme App', () => {
  let page: VersatileDashboardThemePage;

  beforeEach(() => {
    page = new VersatileDashboardThemePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
