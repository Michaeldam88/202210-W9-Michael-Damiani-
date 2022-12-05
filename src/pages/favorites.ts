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
            <div class="home-header">
            <h2>Pokemon Favoritos</h2>
            <h3>Vistos 20/10000</h3>
            </div>
            <slot name="favorites">
            <h4 class="no-favorites">De momento no hay favoritos</h4>
            </slot>
            <div class="change-page">
            <button id="previuos" ><</button>
            <button id="next">></button>
            </div>
        </main>        
        `;
    }
}
