import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonList } from "../pages/PokemonsListPage/PokemonList";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { PokemonDetails } from "../pages/PokemonDetailPage/PokemonDetails";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";


export function Router() {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList/>} />
          <Route path="/pokedex" element={<PokedexPage/>} />
          <Route path="/details/:name" element={<PokemonDetails/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }