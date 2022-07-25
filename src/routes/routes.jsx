import * as React from 'react'
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

const Home = React.lazy(() => import("../pages/Home"));
const Movie = React.lazy(() => import("../pages/Movie"));

const MovieRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
      </Routes>
     </Suspense>
  );
};

export default MovieRoutes;
