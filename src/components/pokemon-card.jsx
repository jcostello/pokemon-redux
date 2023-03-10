import { useState } from "react"
import Spinner from "./spinner"

const PokemonCard = ({ pokemon, onClick }) => {
  const [isLoading, setIsLoading] = useState(false)

  const onClickHandle = async () => {
    if (!onClick || pokemon.caught) return

    setIsLoading(true)

    await onClick(pokemon)

    setIsLoading(false)
  }

  return (
    <li
      onClick={onClickHandle}
      key={pokemon.id}
      className="pokemon-card col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex-1 flex flex-col p-8">
          {pokemon.caught && (
            <div className="check-container">
              <div className="check" />
            </div>
          )}
          <img
            className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt=""
          />
          <h3 className="mt-6 text-gray-900 text-sm font-medium">
            {pokemon.name}
          </h3>
        </div>
      )}
    </li>
  )
}

export default PokemonCard
