import * as React from "react";
import { useParams } from "react-router-dom";
import * as Chakra from "@chakra-ui/react";
import { useMovies } from "../context";
import Modal from "../components/Modal";

const MovieCard = () => {
  let { movieId } = useParams();
  console.log("MOVIEID:", movieId);
  const { loading, movie, trailers, setMovieId } = useMovies();
  console.log("MOVIE:", movie);
  console.log("TRAILER:", trailers);

  React.useEffect(() => {
    movieId && setMovieId(Number(movieId));
  }, [movieId, setMovieId]);

  return (
    <Chakra.Container>
      {loading ? (
        <Chakra.Spinner />
      ) : (
        <>
          <Chakra.Center>
            <Chakra.Box
            mt={6}
              maxW={"445px"}
              w={"full"}
              boxShadow={"outline"}
              p={10}
              overflow={"hidden"}
            >
              <Chakra.Stack>
                <Chakra.Heading fontSize={"2xl"} fontFamily={"body"}>
                  <Chakra.Link>
                    <h2>{movie.title}</h2>
                  </Chakra.Link>
                </Chakra.Heading>

                <Chakra.Circle size="40px" bg="teal.300" color="white">
                  {Math.floor(movie.vote_average * 10)}%
                </Chakra.Circle>

                {!!movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    width="360px"
                    height="auto"
                  />
                )}
                <Chakra.Heading fontSize={"xl"}>Overview</Chakra.Heading>
                <Chakra.Text
                  color={"green.500"}
                  fontWeight={600}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  {movie.overview}
                </Chakra.Text>
                {!loading &&
                  trailers?.results?.map((trailer) => {
                    if (trailer.name === "Official Trailer") {
                      return <Modal trailer={trailer} key={trailer.id} />;
                    }
                    return null;
                  })}
              </Chakra.Stack>
            </Chakra.Box>
          </Chakra.Center>
        </>
      )}
    </Chakra.Container>
  );
};

export default MovieCard;
