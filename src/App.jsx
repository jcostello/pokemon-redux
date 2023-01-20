import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import PokemonCaughts from "./routes/pokemon-caughts"
import PokemonDirectory from "./routes/pokemon-directory"
import { fetchPokemons } from "./store/reducers/pokemons.actions"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonDirectory />,
  },
  {
    path: "/caughts",
    element: <PokemonCaughts />,
  },
])

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])

  return (
    <div className="mx-auto max-w-3xl">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
