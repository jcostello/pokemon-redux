import { POKEMONS_ACTION_TYPES } from "./pokemons.types"
import { createAction } from "./utils"

export const setSearch = (search) =>
  createAction(POKEMONS_ACTION_TYPES.SET_SEARCH, search)

export const addPokemonToCaughtList = (pokemon) =>
  createAction(POKEMONS_ACTION_TYPES.ADD_POKEMON_TO_CAUGHT_LIST, pokemon)

export const fetchPokemonsStart = () =>
  createAction(POKEMONS_ACTION_TYPES.FETCH_POKEMONS_START)

export const fetchPokemonsSuccess = (pokemons) =>
  createAction(POKEMONS_ACTION_TYPES.FETCH_POKEMONS_SUCCESS, pokemons)

export const fetchPokemonsFailure = () =>
  createAction(POKEMONS_ACTION_TYPES.FETCH_POKEMONS_FAILURE)

const POKEMONS_URL =
  "https://run.mocky.io/v3/dec87687-25cb-47d7-be32-853bfabbc92a"

export const fetchPokemons = () => {
  return async (dispatch) => {
    dispatch(fetchPokemonsStart())
    try {
      const response = await fetch(POKEMONS_URL)
      const pokemons = await response.json()
      dispatch(fetchPokemonsSuccess(pokemons))
    } catch (error) {
      dispatch(fetchPokemonsFailure())
    }
  }
}
