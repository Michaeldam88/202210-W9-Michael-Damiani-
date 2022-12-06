import { PokemonDetailType } from '../models/pokemonDetail.js';
import { Component } from './component.js';

export class PokemonDetailMod extends Component {
    constructor(private item: PokemonDetailType) {
        super();
        this.template = this.createTemplate();
        this.render();
    }

    render() {
        const element = super.innRender('html');

        return element;
    }

    private createTemplate() {
        return `
                <div class="modal-container">
                    <div class="modal">
                    <div>
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
                    </div>
                    <div class="modal-details">
                        <ul>
                            <li>Height: ${(this.item.height * 0.1).toFixed(
                                1
                            )} m</li>
                            <li>Weight: ${this.item.weight} Kg</li>
                            <li>Type: ${this.item.types[0].type.name}</li>
                            <li>ETC... </li>
                        </ul>
                    </div>
                    
                    </div>
                </div>
        `;
    }
}
