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
            <h3>Vistos 20/10000</h3>
            <slot name="favorites"></slot>
            
        </main>

        <div>
            <button id="previuos" ><</button>
            <button id="next">></button>
        </div>
        `;
    }
}
