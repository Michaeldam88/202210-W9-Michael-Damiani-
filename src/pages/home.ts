import { Component } from '../components/component.js';
import { List } from '../components/list.js';
import { PageCardResponseType } from '../models/pageCardsResponse.js';

export class HomePage extends Component {
    url = 'https://pokeapi.co/api/v2/pokemon';
    response!: PageCardResponseType;

    constructor(private selector: string) {
        super();
        this.init(this.url);
    }

    async init(url: string) {
        this.response = await (await fetch(url)).json();
        this.template = this.createTemplate();
        this.render();

        try {
            new List('[name=home]', this.response.results);
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const element = super.innRender(this.selector);
        element.querySelector('#previous')?.addEventListener('click', () => {
            if (!this.response.previous) return;
            this.cleanHtml(this.selector);
            this.init(this.response.previous);
        });
        element.querySelector('#next')?.addEventListener('click', () => {
            this.cleanHtml(this.selector);
            this.init(this.response.next);
        });
        return element;
    }

    private createTemplate() {
        return `
        <main>
            <div class="home-header">
            <h2>Pokemon List</h2>
            <h3>Vistos 20 / ${this.response.count}</h3>
            </div>
            <slot name="home"></slot>
            <div class="change-page">
            <button id="previous" ><</button>
            <button id="next">></button>
            </div>
        </main>
        `;
    }
}
