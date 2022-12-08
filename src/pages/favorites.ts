import { Component } from '../components/component.js';
import { ListFavorited } from '../components/listFavorited.js';
import { PokemonDetailType } from '../models/pokemonDetail.js';

export class Favorites extends Component {
    url = 'http://localhost:3000/api/pokemon';
    response!: Array<PokemonDetailType>;
    constructor(private selector: string) {
        super();
        this.init(this.url);
    }

    async init(url: string) {
        this.response = await (await fetch(url)).json();
        this.template = this.createTemplate();
        this.render();

        try {
            new ListFavorited('[name=favorites]', this.response);
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const element = super.innRender(this.selector);
        return element;
    }

    private createTemplate() {
        return `
        <main>
            <div class="home-header">
            <h2>Pokemon Favoritos</h2>
            <h3>Guardados 0</h3>
            </div>
            <slot name="favorites">
            <h4 class="no-favorites">De momento no hay favoritos</h4>
            </slot>
            <div class="change-page">
            <button id="previous" ><</button>
            <button id="next">></button>
            </div>
        </main>        
        `;
    }
}
