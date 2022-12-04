import { Component } from '../components/component.js';

export class Favorites extends Component {
    constructor(private selector: string) {
        super();
        this.template = this.createTemplate();
        this.render();
    }

    render() {
        return super.innRender(this.selector);
    }

    private createTemplate() {
        return `
        <main>
            <h2>Pokemon Favoritos</h2>
        </main>
        `;
    }
}
