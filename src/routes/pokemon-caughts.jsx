import { useSelector } from "react-redux"
import PokemonCounter from "../components/pokemon-counter"
import PokemonList from "../components/pokemon-list"
import { selectCaughtPokemons } from "../store/reducers/pokemons.selector"

const PokemonCaughts = () => {
  const pokemons = useSelector(selectCaughtPokemons)

  return (
    <>
      <div className="search-container">
        <h1 className="w-full">Caughts</h1>
        <PokemonCounter />
      </div>
      <PokemonList pokemons={pokemons} />
    </>
  )
}

export default PokemonCaughts
