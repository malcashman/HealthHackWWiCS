import { HealthHackPage } from './app.po';

describe('health-hack App', function() {
  let page: HealthHackPage;

  beforeEach(() => {
    page = new HealthHackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
