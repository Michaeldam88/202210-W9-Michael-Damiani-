import { Favorites } from '../pages/favorites.js';
import { HomePage } from '../pages/home.js';
import { MenuOptionsType } from '../types/menu.options.js';
import { Header } from './header.js';
import { Menu } from './menu.js';

export class App {
    menuOptions: MenuOptionsType;
    constructor() {
        this.menuOptions = [
            { path: './index.html', label: 'Home' },
            { path: './favorites.html', label: 'Favorites' },
        ];
        try {
            new Header('.root');
            new Menu('header', this.menuOptions);
            this.router();
        } catch (error) {
            console.error(error);
        }
    }

    router() {
        const path = './' + location.pathname.split('/').at(-1);
        switch (path) {
            case this.menuOptions[0].path:
                return new HomePage('.root');
            case this.menuOptions[1].path:
                return new Favorites('.root');
            default:
                throw new Error('Path no disponible');
        }
    }
}
