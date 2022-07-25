import * as React from "react";
import axios from "axios";

const MoviesContext = React.createContext({});

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = React.useState([]);
  const [trailers, setTrailers] = React.useState([]);
  const [movie, setMovie] = React.useState({});
  const [movieId, setMovieId] = React.useState();
  const [loading, setLoading] = React.useState(false);

  console.log("M:", movieId);

  const fetchMovies = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      const results = response.data;
      setMovies(results);
      setLoading(false);
    } catch (error) {
      console.log("ERROR:", error);
    }
  }, []);

  React.useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const fetchMovie = React.useCallback(async () => {
    setLoading(true);
    if (!!movieId) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        const result = response.data;
        setMovie(result);
        setLoading(false);
      } catch (error) {
        // console.log(error);
        console.log("ERROR:", error);
      }
    }
  }, [movieId]);

  React.useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  const fetchTrailers = React.useCallback(async () => {
    setLoading(true);
    if (!!movieId) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        const result = response.data

        setTrailers(result);

        setLoading(false);
      } catch (error) {
        console.log("ERROR:", error);
      }
    }
  }, [movieId]);

  React.useEffect(() => {
    fetchTrailers();
  }, [fetchTrailers]);

  return (
    <MoviesContext.Provider
      value={{
        loading,
        movies,
        movie,
        trailers,
        setMovieId,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const useMovies = () => {
  const context = React.useContext(MoviesContext);
  return context;
};

export { MoviesProvider, useMovies };
