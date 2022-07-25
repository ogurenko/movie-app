import * as React from "react";
import * as Chakra from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMovies } from "../context";

const HomePage = () => {
  const { movies } = useMovies();
  console.log("MOVIES:", { movies });

  return (
    <>
      <Chakra.Heading textAlign="center">Trending Movies</Chakra.Heading>
      <Chakra.Box maxW="1200px" mx="auto" mt="20px">
        <Chakra.SimpleGrid
          bg="gray.50"
          columns={{ sm: 2, md: 3, lg: 4 }}
          spacing="6"
        >
          {movies?.results?.map((m) => {
            return (
              <Chakra.Box key={m.id}>
                <Link to={`/${m.id}`}>
                  <Chakra.Image
                    boxShadow="sm"
                    rounded="md"
                    boxSize="300px"
                    src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                    alt={m.title}
                    width="360px"
                    height="auto"
                  />
                </Link>
              </Chakra.Box>
            );
          })}
        </Chakra.SimpleGrid>
      </Chakra.Box>
      {/* </Chakra.Flex>
        </Chakra.Stack> */}
    </>
  );
};
export default HomePage;
