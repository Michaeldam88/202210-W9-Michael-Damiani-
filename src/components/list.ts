import { PokemonDetailType } from '../models/pokemonDetail.js';
import { Component } from './component.js';
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
                    this.addToFavorite.bind(this)
                );
            });
        } catch (error) {
            console.error(error);
        }
    }

    async init() {
        const responses = await Promise.all(
            this.cards.map((e) => fetch(e.url)),
        );
        this.itemlist = await Promise.all(responses.map((e) => e.json()));
        this.manageComponent();
    }

    render() {
        super.cleanHtml(this.selector);
        return super.innRender(this.selector);
    }

    addToFavorite() {
        console.log('added to favorites');
    }

    private createTemplate() {
        return `
        <section class="pokemon-list">            
            <ul class="slot-items"></ul>
        </section>
        `;
    }
}
