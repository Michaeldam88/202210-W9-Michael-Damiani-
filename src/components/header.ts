import { Component } from "./component.js";


export class Header extends Component {
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
        <header>
            <h1>
                Pokedex
            </h1>
        </header>
        `;
    }
}
