import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useState, useEffect, useContext } from 'react';
import { getColors } from "../../Colors/ReturnCardColor"
import { getTypes } from "../../Colors/ReturnType"
import { DetailsContainer, Title, CardContainer, DivPixel, ImgPixel, InfoPokeCard, Moves, PokemonImage,
} from "./PokemonDetailsStyled";
import BarraStatus from "./ProgressBar";


export function PokemonDetails() {

    const { pokeDetails, convertNumber } = useContext(GlobalContext);
    const [listMoves, setListMoves] = useState([]);

    useEffect(() => {
      if (pokeDetails && pokeDetails.moves) {
        const arrayMoves = pokeDetails.moves.map(
          (elemento) => elemento.move.name
        );
        setListMoves(arrayMoves);
      }
    }, [pokeDetails]);


    return (
        <>
        <Header/>
        <DetailsContainer>
        <Title>Detalhes</Title>

        <div>
          {pokeDetails.map((pokemon) => {
            
            const backgroundColor = pokemon.types && pokemon.types.length > 0 && pokemon.types[0].type
              ? getColors(pokemon.types[0].type.name)
              : "";

            // const imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

            const imgPokemon = `https://www.serebii.net/swordshield/pokemon/${convertNumber(pokemon.id)}.png`

            return (
              <CardContainer key={pokemon.name} style={{ backgroundColor }}>
                <DivPixel>
                  <ImgPixel>
                    <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
                  </ImgPixel>
                  <ImgPixel>
                    <img src={pokemon.sprites?.back_default} alt={pokemon.name} />
                  </ImgPixel>
                </DivPixel>

                <BarraStatus pokemon={pokemon} color={backgroundColor}/> 

                <div>
                  <InfoPokeCard>
                    <p className="infoId">#{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}</p>
                    <p className="infoName">{pokemon && pokemon.name ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : ""}</p>
                    {pokemon.types && (
                      <div className="infoType">
                        {pokemon.types.map((type) => (
                          <img
                            key={type.type.name}
                            src={getTypes(type.type.name)}
                            alt={type.type.name}
                          />
                        ))}
                      </div>
                    )}
                  </InfoPokeCard>
                  <Moves>
                    <h2>Moves:</h2>
                    <div className="div-list">
                      {pokemon.moves.slice(0, 50).map((move, index) => (
                        <p key={index} className="move-list">
                          {move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1).toLowerCase()}
                        </p>
                      ))}
                    </div>
                  </Moves>
                </div>
                <PokemonImage
                  src={imgPokemon}
                  alt={pokemon.name}
                />
              </CardContainer>
            );
          })}
        </div>
      </DetailsContainer>
        </>
    )
} 