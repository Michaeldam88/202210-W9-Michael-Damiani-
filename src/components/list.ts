import { PokemonDetailType } from '../models/pokemonDetail.js';
import { Component } from './component.js';
import { PokemonDetailMod } from './pokemonDetailMod.js';
import { PokemonItem } from './pokemonItem.js';

export class List extends Component {
    itemlist!: Array<PokemonDetailType>;

    constructor(
        private selector: string,
        private cards: Array<{ name: string; url: string }>
    ) {
        super();
        this.init();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.render();

        try {
            this.itemlist.forEach((item) => {
                new PokemonItem(
                    'ul.slot-items',
                    item,
                    this.addToFavorite.bind(this),
                    this.showDetails.bind(this)
                );
            });
        } catch (error) {
            console.error(error);
        }
    }

    async init() {
        const responses = await Promise.all(
            this.cards.map((e) => fetch(e.url))
        );
        this.itemlist = await Promise.all(responses.map((e) => e.json()));
        this.manageComponent();
    }

    render() {
        super.cleanHtml(this.selector);
        return super.innRender(this.selector);
    }

    addToFavorite(item: PokemonDetailType) {
        return fetch('http://localhost:3000/api/pokemon', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json',
            },
        }).then((resp) => {
            if (!resp.ok)
                throw new Error(`Error ${resp.status}: ${resp.statusText}`);
            const pokeball = document.querySelector(`#id_${item.id} button`);
            pokeball?.classList.add('favorites');
            return resp.json();
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
