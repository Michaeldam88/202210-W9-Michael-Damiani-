type CardType = {
    id: string;
    name: string;
    imgUrl: string;
    isFavorited: boolean;
};

export class PokemonCard implements CardType {
    isFavorited: boolean;
    constructor(public id: string, public name: string, public imgUrl: string) {
        this.isFavorited = false;
    }
}
