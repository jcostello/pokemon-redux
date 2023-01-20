import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectCaughtPokemons } from "../store/reducers/pokemons.selector"

const PokemonCounter = () => {
  const caughtPokemons = useSelector(selectCaughtPokemons)

  return (
    <Link className="circle" to="/caughts">
      <div className="circle_content">{caughtPokemons.length}</div>
    </Link>
  )
}

export default PokemonCounter
