import { useEffect, useState } from 'react';
import { Router } from './routes/Router';
import axios from 'axios';
import { BASE_URL_1 } from './constants/BASE_URL';
import { GlobalContext } from "./contexts/GlobalContext";

function App() {

  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [capturar, setCapturar] = useState(false);
  const [excluir, setExcluir] = useState(false);
  const [pokeDetails, setPokeDetails] = useState([]);

  useEffect(() => {
    const savedPokedex = localStorage.getItem('pokedex');
    if (savedPokedex) {
        setPokedex(JSON.parse(savedPokedex));
    }
  }, []);

  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL_1);
      setPokelist(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar a lista de pokemons");
      console.log(error.response);
    }
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);

      setCapturar(true);
      setTimeout(() => {
          setCapturar(false);
        }, 1100);

        localStorage.setItem('pokedex', JSON.stringify(newPokedex));
    }
  };

  const addToDetailsPage = (pokemonToDetails) => {
    setPokeDetails([pokemonToDetails]);
};

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name);

    setPokedex(newPokedex);
    setExcluir(true);
    setTimeout(() => {
          setExcluir(false);
        }, 1100);

        localStorage.setItem('pokedex', JSON.stringify(newPokedex));
  };

  const convertNumber = (number) => {
    if(number > 0 && number < 10){
        return `00${number}`;
    }else if(number >= 10 && number <= 99){
        return `0${number}`;
    }else{
        return number;
    }
  }

  const context = {
    pokedex,
    setPokedex,
    pokelist,
    addToPokedex,
    removeFromPokedex,
    convertNumber,
    capturar,
    setCapturar,
    excluir,
    setExcluir,
    pokeDetails,
    addToDetailsPage
  }

  return (
    <GlobalContext.Provider value={context} >
    <Router />
    </GlobalContext.Provider>
  );
}

export default App;
