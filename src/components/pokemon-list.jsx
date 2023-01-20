import PokemonCard from "./pokemon-card"

const PokemonList = ({ pokemons, onCardClick }) => {
  return pokemons.length ? (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={onCardClick} />
      ))}
    </ul>
  ) : (
    <div className="flex h-96">
      <div className="m-auto p-20 bg-white rounded-lg shadow divide-y divide-gray-200">
        No Pokemons Found
      </div>
    </div>
  )
}

export default PokemonList
