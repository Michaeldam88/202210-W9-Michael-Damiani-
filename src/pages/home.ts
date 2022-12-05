import { Component } from '../components/component.js';
import { List } from '../components/list.js';
import { PageCardResponseType } from '../models/pageCardsResponse.js';

export class HomePage extends Component {
    url = 'https://pokeapi.co/api/v2/pokemon';

    constructor(private selector: string) {
        super();
        this.template = this.createTemplate();
        this.render();
        this.init(this.url);
    }

    async init(url:string) {
        const response: PageCardResponseType = await (
            await fetch(url)
        ).json();

        try {
            new List('[name=home]', response.results);
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return super.innRender(this.selector);

    }

    private createTemplate() {
        return `
        <main>
            <h2>Pokemon List</h2>
            <h3>Vistos 20/10000</h3>
            <slot name="home"></slot>
            <div>
            <button id="previuos" ><</button>
            <button id="next">></button>
        </div>
        </main>
        `;
    }
}
