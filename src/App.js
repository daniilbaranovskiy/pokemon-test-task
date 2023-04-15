import { PokemonProvider } from "./context/PokemonProvider";
import "./App.css";
import { Router } from "./Router";

function App() {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  );
}

export default App;
