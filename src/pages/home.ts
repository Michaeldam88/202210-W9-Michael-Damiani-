import { Component } from '../components/component.js';
import { List } from '../components/list.js';
import { PageCardResponseType } from '../models/pageCardsResponse.js';

export class HomePage extends Component {
    url = 'https://pokeapi.co/api/v2/pokemon';
    response!: PageCardResponseType;
    visualizedPokemon = 20;
    pageNumber = 1;
    maxPageNum = 0;

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
            this.pageNumber -= 1;
            this.removeHtml('main');
            this.init(this.response.previous);
        });
        element.querySelector('#next')?.addEventListener('click', () => {
            this.removeHtml('main');
            if (this.pageNumber > this.maxPageNum) {
                this.maxPageNum = this.pageNumber;
                this.visualizedPokemon += 20;
            }

            this.pageNumber += 1;
            this.init(this.response.next);
        });
        return element;
    }

    private createTemplate() {
        return `
        <main>
            <div class="home-header">
            <h2>Pokemon List</h2>
            <h3>Vistos ${this.visualizedPokemon} / ${this.response.count}</h3>
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
