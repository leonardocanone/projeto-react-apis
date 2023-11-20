import { useLocation, useNavigate } from "react-router-dom";
import { CapturarOverlay, StyleHeader } from "./HeaderStyled";
import { goToPokedexPage, goToPokemonList } from "../../routes/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import pokedexLogo from "../../assets/pokedex-logo.png";
import gotcha from "../../assets/gotcha.svg"
import ohNo from "../../assets/oh-no.svg"

export function Header() {

    const location = useLocation();
    const navigate = useNavigate();
    
    const context = useContext(GlobalContext);
    const { pokeDetails, addToPokedex, removeFromPokedex, capturar, setCapturar, excluir, setExcluir, pokedex } = context

    const handleAddToPokedexClick = () => {
      addToPokedex(pokeDetails[0]);
  
      setCapturar(true);
      setTimeout(() => {
        setCapturar(false);
      }, 1200);
    };
  
    const handleRemoveFromPokedexClick = () => {
      removeFromPokedex(pokeDetails[0]);
  
      setExcluir(true);
      setTimeout(() => {
        setExcluir(false);
      }, 1200)
    };
  
    const isInPokedex = () => {
      return pokeDetails.length > 0 && pokedex.some((pokemon) => pokemon.name === pokeDetails[0].name);
    };
  
  
    let headerContent;
  
    if (location.pathname === "/") {
      headerContent = (
        <>
          <button onClick={() => goToPokedexPage(navigate)} className="pokedexButton">
            <p>Pokédex</p>
          </button>
          <img className="logo" src={pokedexLogo} alt="Pokémon logo" />
        </>
      );
    } else if (location.pathname === "/pokedex") {
      headerContent = (
        <>
          <button onClick={() => goToPokemonList(navigate)} className="buttonAllPokemons">
            <p>Todos os Pokémons</p>
          </button>
          <img className="logo" src={pokedexLogo} alt="Pokémon logo" />
        </>
      );
    }
  
    else if (location.pathname.startsWith("/details/")) {
      const pokemonIsInPokedex = isInPokedex();
  
      headerContent = (
        <>
          <button onClick={() => goToPokemonList(navigate)} className="buttonAllPokemons">
            <p>Todos os Pokémons</p>
          </button>
  
          {pokemonIsInPokedex ? (
            <button onClick={handleRemoveFromPokedexClick} className="excluir">
              <p>Excluir</p>
            </button>
          ) : (
            <button onClick={handleAddToPokedexClick} className="adicionar">
              <p>Adicionar</p>
            </button>
          )}
  
          <img className="logo" src={pokedexLogo} alt="Pokémon logo" />
        </>
      );
    }
  
    else {
      headerContent = (
        <>
          <button onClick={() => goToPokemonList(navigate)} className="pageNotFound">
            <p>Voltar para Todos os Pokémons</p>
          </button>
          <img className="logo" src={pokedexLogo} alt="Pokémon logo"/>
        </>
      );
    }
  
    return (
      <StyleHeader>
        {headerContent}
        {capturar && (
          <CapturarOverlay className="CapturarOverlay">
            <img src={gotcha} alt="Capturando" />
          </CapturarOverlay>
        )}
        {excluir && (
          <CapturarOverlay className="RemoverOverlay">
            <img src={ohNo} alt="Excluindo" />
          </CapturarOverlay>
        )}
      </StyleHeader>
    );

  }