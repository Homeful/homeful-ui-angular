import { HomefulUiPage } from './app.po';

describe('homeful-ui App', function() {
    let page: HomefulUiPage;

    beforeEach(() => {
        page = new HomefulUiPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
