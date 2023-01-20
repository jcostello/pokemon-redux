import { useDispatch, useSelector } from "react-redux"
import PokemonCounter from "../components/pokemon-counter"
import PokemonList from "../components/pokemon-list"
import SearchBox from "../components/search-box"
import Spinner from "../components/spinner"
import { addPokemonToCaughtListService } from "../services/pokemons.service"
import {
  selectCaughtPokemons,
  selectIsLoading,
  selectPokemons,
} from "../store/reducers/pokemons.selector"

const PokemonDirectory = () => {
  const pokemons = useSelector(selectPokemons)
  const caughtPokemons = useSelector(selectCaughtPokemons)
  const isLoading = useSelector(selectIsLoading)

  const dispatch = useDispatch()

  const pokemonCardClickHandle = async (pokemon) => {
    await addPokemonToCaughtListService(dispatch, caughtPokemons, pokemon)
  }

  return (
    <>
      <div className="search-container">
        <SearchBox />
        <PokemonCounter />
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <PokemonList pokemons={pokemons} onCardClick={pokemonCardClickHandle} />
      )}
    </>
  )
}

export default PokemonDirectory
