import MovieCard from "./components/MovieCard";

import { useState, useEffect } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/trending/movie/week?api_key=63efd9bdf15c423e8869bd88d09598e1";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Movies not found!");
        }
        const data = await response.json();
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        console.error("Error in API call!", error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </>
  );
};

export default App;
