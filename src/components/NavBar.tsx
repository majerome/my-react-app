interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
    return <nav>
        {pokemonList.map((pokemon) => (
            <button
                key={pokemon.name}
                type="button"
                onClick={() => setPokemonName(pokemon.name)}
            >
                {pokemon.name}
            </button>
        ))}
    </nav>;
}

export default NavBar;