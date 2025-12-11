import MovieCard from "./components/MovieCard";
import Categories from "./components/Categories";
import { useState, useEffect } from "react";
import { Flame, Swords, Heart, Panda, Ghost, Star, Moon } from "lucide-react";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState("Trending");

  const movieCategories = [
    {
      movieCategory: "Trending",
      icon: <Flame />,
    },
    {
      movieCategory: "Action",
      icon: <Swords />,
    },
    {
      movieCategory: "Romance",
      icon: <Heart />,
    },
    {
      movieCategory: "Animation",
      icon: <Panda />,
    },
    {
      movieCategory: "Horror",
      icon: <Ghost />,
    },
    {
      movieCategory: "Special",
      icon: <Star />,
    },
    {
      movieCategory: "Drakor",
      icon: <Moon />,
    },
  ];

  function handleCategory(category) {
    setFilteredCategories(category);
  }
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

        setMovies(data.results);
      } catch (error) {
        console.error("Error in API call!", error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
      <Categories
        movieCategories={movieCategories}
        filteredCategories={filteredCategories}
        handleCategory={handleCategory}
      />
      <div className="trendingMovies">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default App;
