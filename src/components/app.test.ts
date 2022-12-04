import { Favorites } from '../pages/favorites';
import { HomePage } from '../pages/home';
import { App } from './app';
import { Header } from './header';
import { Menu } from './menu';

jest.mock('./header.js');
jest.mock('./menu.js');
jest.mock('../pages/home.js');
jest.mock('../pages/favorites.js');

describe('Given and instantiate "App" class', () => {
    beforeAll(() => {
        global.window = Object.create(window);
        Object.defineProperty(window, 'location', {
            value: {},
        });
    });
    describe('When location include a pathname "./index.html"', () => {
        test('Then the application components, included HomePage, should be instantiated ', () => {
            global.window.location.pathname = './index.html';
            const app = new App();
            expect(app).toBeInstanceOf(App);
            expect(Header).toHaveBeenCalled();
            expect(Menu).toHaveBeenCalled();
            expect(HomePage).toHaveBeenCalled();
        });
    });
    describe('When location include a pathname "./favorites.html"', () => {
        test('Then the component AboutPage, should be instantiated', () => {
            global.window.location.pathname = './favorites.html';
            const app = new App();
            expect(app).toBeInstanceOf(App);
            expect(Favorites).toHaveBeenCalled();
        });
    });
});
