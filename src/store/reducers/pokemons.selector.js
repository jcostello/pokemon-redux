import { createSelector } from "reselect"

export const selectSearch = (state) => state.pokemons.search
export const selectCaughtPokemons = (state) => state.pokemons.caughtPokemons
export const selectIsLoading = (state) => state.pokemons.isLoading

export const selectPokemons = createSelector(
  (state) => state.pokemons.pokemons,
  (state) => state.pokemons.search,
  (state) => state.pokemons.caughtPokemons,
  (pokemon, search, caughtPokemons) => {
    return (pokemon || [])
      .filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 10)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((pokemon) => {
        return {
          ...pokemon,
          caught: caughtPokemons.find((cp) => cp.name === pokemon.name),
        }
      })
  }
)
