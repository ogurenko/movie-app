import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { MoviesProvider } from "./context";
import MovieRoutes from "./routes/routes";

function App() {
  return (
    <ChakraProvider>
      <MoviesProvider>
        <HashRouter>
          <MovieRoutes />
        </HashRouter>
      </MoviesProvider>
    </ChakraProvider>
  );
}

export default App;
