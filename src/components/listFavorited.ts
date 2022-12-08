import { PokemonDetailType } from '../models/pokemonDetail.js';
import { Component } from './component.js';
import { PokemonDetailMod } from './pokemonDetailMod.js';
import { PokemonItemFavorited } from './pokemonItemFavorited.js';

export class ListFavorited extends Component {
    url = 'http://localhost:3000/api/pokemon';
    constructor(
        private selector: string,
        private itemlist: Array<PokemonDetailType>
    ) {
        super();
        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.render();

        try {
            this.itemlist.forEach((item) => {
                new PokemonItemFavorited(
                    'ul.slot-items',
                    item,
                    this.removeFavorite.bind(this),
                    this.showDetails.bind(this)
                );
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        super.cleanHtml(this.selector);
        return super.innRender(this.selector);
    }

    removeFavorite(item: PokemonDetailType) {
        return fetch(this.url + item.id, {
            method: 'DELETE',
        }).then((resp) => {
            if (!resp.ok)
                throw new Error(`Error ${resp.status}: ${resp.statusText}`);
            return item.id;
        });
    }

    showDetails(item: PokemonDetailType) {
        new PokemonDetailMod(item);
    }

    private createTemplate() {
        return `
        <section class="pokemon-list">            
            <ul class="slot-items"></ul>
        </section>
        `;
    }
}
