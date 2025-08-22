import { useState } from "react";
import './App.css'
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "darkgreen",
    backgroundColor: "lightgreen",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    color: "firebrick",
    backgroundColor: "lightsalmon",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    color: "navy",
    backgroundColor: "lightblue",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    color: "goldenrod",
    backgroundColor: "lightyellow",
  },
  {
    name: "mew",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    color: "orchid",
    backgroundColor: "plum",
  },
];

function App() {

  const [pokemonName, setPokemonName] = useState("bulbasaur");
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);
  
  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <nav>
        {pokemonList.map((pokemon) => (
          <button key={pokemon.name} onClick={() => setPokemonName(pokemon.name)}>
            {pokemon.name}
          </button>
        ))}
      </nav>
      <PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} color={pokemon.color} backgroundColor={pokemon.backgroundColor} />
    </div>
  );
}

export default App;