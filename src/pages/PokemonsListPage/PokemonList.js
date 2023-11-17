import { Header } from "../../components/Header/Header";
import { Card } from "../../components/PokemonCard/PokeCard";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { StyleList, TodosPokemons } from "./PokemonListStyled";


export function PokemonList() {

  const context = useContext(GlobalContext)
  const { pokelist, pokedex } = context 

  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

    return (
        <>
        <Header/>
        <StyleList>
        <TodosPokemons>Todos os Pokémons</TodosPokemons>
        <section>
        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}
            pokemonUrl={pokemon.url}
          />
        ))}
      </section>
        </StyleList>
        </>
    )
} 