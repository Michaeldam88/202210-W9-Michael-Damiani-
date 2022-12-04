export interface PokemonDetailType {
    id: number;
    name: string;
    sprites: {
        other: { 'official-artwork': { front_default: string } };
    };
}
