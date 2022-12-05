import { PokemonDetailType } from "../models/pokemonDetail.js";
import { Component } from "./component.js";

export class PokemonDetailMod extends Component {
    constructor(private item: PokemonDetailType) {
        super();
        
    }
}
