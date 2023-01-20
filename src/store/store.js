import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { pokemonsReducer } from "./reducers/pokemons.reducer"

// eslint-disable-next-line no-undef
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean)

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
})

export const store = createStore(rootReducer, undefined, composedEnhancers)

// export const store = configureStore({
//   reducer: {
//     pokemons: pokemonsSlice.reducer,
//     pokemonApi: pokemonApi.reducer,
//   },
// })

// import { configureStore, createSlice } from "@reduxjs/toolkit"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// export const pokemonApi = createApi({
//   reducerPath: "pokemonApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://run.mocky.io/v3/" }),
//   endpoints: (builder) => ({
//     getPokemon: builder.query({
//       query: () => "dec87687-25cb-47d7-be32-853bfabbc92a",
//     }),
//   }),
// })

// export const usePokemonQuery = pokemonApi.endpoints.getPokemon.useQuery

// const pokemonsSlice = createSlice({
//   name: "pokemons",
//   initialState: {
//     caughtPokemons: [],
//     search: "",
//   },
//   reducers: {
//     addPokemonToCaughtList: (state, action) => {
//       const existingPokemon = state.caughtPokemons.find(
//         (pokemon) => pokemon.name === action.payload.name
//       )

//       if (!existingPokemon) state.caughtPokemons.push(action.payload)
//     },
//     setSearch: (state, action) => {
//       state.search = action.payload
//     },
//   },
// })

// export const { setSearch, addPokemonToCaughtList } = pokemonsSlice.actions

// store.dispatch(pokemonApi.endpoints.getPokemon.initiate(undefined))
