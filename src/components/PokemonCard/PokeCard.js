import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { CapturarOverlay, CatchButton, ExcludeButton, Pokeball, PokemonImage, PokemonName, PokemonNumber, PokemonType, StyleCard, TypesContainer } from "./PokeCardStyled";
import { GlobalContext } from "../../contexts/GlobalContext";
import pokeball from '../../assets/pngwing-2.png'
import { getColors } from "../../Colors/ReturnCardColor"
import { getTypes } from "../../Colors/ReturnType"
import gotcha from "../../assets/gotcha.svg"
import loadingGif from "../../assets/loading.gif"
import { useRequestData } from "../../hooks/useRequestData";


export function Card(props) {

  const context = useContext(GlobalContext)
  const { addToPokedex, removeFromPokedex, convertNumber, capturar, addToDetailsPage } = context
  const { pokemonUrl } = props;

  const [data, error, isLoading] = useRequestData(pokemonUrl);

  const location = useLocation();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});
  // console.log(pokemon);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar a lista de pokemons");
      console.log(error);
    }
  };

  const backgroundColor = pokemon.types && pokemon.types.length > 0 && pokemon.types[0].type
    ? getColors(pokemon.types[0].type.name)
    : "";

  return (
    <StyleCard style={{ backgroundColor }}>
      {isLoading &&
      <div> 
      <img src={loadingGif} width={150} alt="Carregando..."/>
      <h2>Carregando...</h2>
      </div>
      }
      {!isLoading && error && <h2>Ocorreu um erro. Tente novamente mais tarde.</h2>}

      <div>       
        <PokemonNumber>#{convertNumber(pokemon.id)}</PokemonNumber>
        <PokemonName>
          {pokemon && pokemon.name ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : ""}
        </PokemonName>
        {/* <PokemonName>{pokemon.name}</PokemonName> */}

        {pokemon.types && (
            <TypesContainer>
              {pokemon.types.map((type) => (
                <PokemonType
                  key={type.type.name}
                  src={getTypes(type.type.name)}
                  alt={type.type.name}
                />
              ))}
            </TypesContainer>
          )}

        {/* <TypesContainer> */}
          {/* <PokemonType>{pokemon.types && pokemon.types[0].type.name}</PokemonType> */}
          {/* <PokemonType>{pokemon.types?.length > 1 && pokemon.types[1].type.name}</PokemonType> */}
        {/* </TypesContainer>  */}

        <button className="linkDetalhes"
          onClick={() => {
            addToDetailsPage(pokemon);
            goToDetailsPage(navigate, pokemon);
          }} 
        >Detalhes
        </button>
      </div>
      <div>
        {/* <img src={pokemon.sprites?.front_default} alt={pokemon.name} /> */}
        <PokemonImage 
          src={`https://www.serebii.net/swordshield/pokemon/${convertNumber(pokemon.id)}.png`}
          // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
          alt={pokemon.name} 
        />
        {location.pathname === "/" ? (
          <CatchButton onClick={() => addToPokedex(pokemon)} >
            Capturar!
          </CatchButton>
        ) : (
          <ExcludeButton onClick={() => removeFromPokedex(pokemon)} >
            Excluir
          </ExcludeButton>
        )}
      </div>
      <Pokeball src={pokeball} alt="pokeball" />

      {capturar && (
          <CapturarOverlay className="CapturarOverlay">
            <img src={gotcha} alt="Capturando" />
          </CapturarOverlay>
        )}

    </StyleCard>
  );
}