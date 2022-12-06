export interface PokemonDetailType {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        other: { 'official-artwork': { front_default: string } };
    };
    types: {
        0: {
            type: {
                name: string;
            };
        };
    };
}
