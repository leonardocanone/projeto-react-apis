import { Header } from "../../components/Header/Header";
import { Card } from "../../components/PokemonCard/PokeCard";
import { StylePokedex, MeusPokemons } from "./PokedexPageStyled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { BASE_URL_2 } from "../../constants/BASE_URL";

export function PokedexPage() {

    const context = useContext(GlobalContext)
    const { pokedex } = context;

    return (
        <>
        <Header />
        <StylePokedex>
        <MeusPokemons>Meus Pokémons</MeusPokemons>
      <section>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`${BASE_URL_2}/${pokemon.name}`}
            // pokemonUrl={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}
          />
        ))}
      </section>
        </StylePokedex>
        </>
    )
} 