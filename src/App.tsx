import { useState } from "react";
import './App.css'
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
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
      <PokemonCard name={pokemon.name} imgSrc={pokemon.imgSrc} />
      <button type="button" onClick={() => setPokemonName("bulbasaur")}>Bulbasaur</button>
      <button type="button" onClick={() => setPokemonName("mew")}>Mew</button>
    </div>
  );
}

export default App;