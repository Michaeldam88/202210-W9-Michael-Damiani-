import { PokemonDetailType } from '../models/pokemonDetail.js';
import { Component } from './component.js';

export class PokemonItem extends Component {
    isFavorited = false;

    constructor(
        private selector: string,
        private item: PokemonDetailType,
        private addToFavorite: (id: number, isFavorited: boolean) => void,
        private showDetails: (item: PokemonDetailType) => void
    ) {
        super();
        this.template = this.createTemplate();
        this.render();
    }

    render() {
        const element = super.innRender(this.selector);
        element
            .querySelector('.addFavorites')
            ?.addEventListener('click', this.handleFavorite.bind(this));

        element
            .querySelector('img')
            ?.addEventListener('click', this.handleDetail.bind(this));

        return element;
    }

    handleFavorite() {
        this.addToFavorite(this.item.id, this.isFavorited);
    }

    handleDetail() {
        this.showDetails(this.item);
    }

    private createTemplate() {
        return `
                <li class="item-card" id="id_${this.item.id}">
                    <img src="${
                        this.item.sprites.other['official-artwork']
                            .front_default
                    }" alt="${this.item.name}">
                    <p>nº ${this.item.id}</p>
                    <h4>${
                        this.item.name[0].toUpperCase() +
                        this.item.name.substring(1)
                    }</h4>
                    <button class="addFavorites"></button>
                </li>
        `;
    }
}
