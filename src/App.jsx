import { GlobalProvider } from "./context/GlobalContext"

const App = () => {
  return (
    <GlobalProvider>
      <div>App</div>
    </GlobalProvider>

  )
}

export default App