import { POKEMONS_ACTION_TYPES } from "./pokemons.types"

const INITIAL_STATE = {
  pokemons: [],
  caughtPokemons: [],
  search: "",
  isLoading: false,
}

export const pokemonsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case POKEMONS_ACTION_TYPES.ADD_POKEMON_TO_CAUGHT_LIST:
      return { ...state, caughtPokemons: [...state.caughtPokemons, payload] }

    case POKEMONS_ACTION_TYPES.FETCH_POKEMONS_START:
      return { ...state, isLoading: true }

    case POKEMONS_ACTION_TYPES.FETCH_POKEMONS_SUCCESS:
      return { ...state, isLoading: false, pokemons: payload }

    case POKEMONS_ACTION_TYPES.FETCH_POKEMONS_FAILURE:
      return { ...state, isLoading: false }

    case POKEMONS_ACTION_TYPES.SET_SEARCH:
      return { ...state, search: payload }

    default:
      return state
  }
}
