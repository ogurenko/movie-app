import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { MoviesProvider } from "./context";
import MovieRoutes from "./routes/routes";

function App() {
  return (
    <ChakraProvider>
      <MoviesProvider>
        <BrowserRouter>
          <MovieRoutes />
        </BrowserRouter>
      </MoviesProvider>
    </ChakraProvider>
  );
}

export default App;
