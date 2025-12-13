import MovieCard from "./components/MovieCard";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState, useEffect } from "react";
import { Flame, Swords, Heart, Panda, Ghost, Star, Moon } from "lucide-react";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState("Trending");
  const [loading, setLoading] = useState(true);

  const movieCategories = [
    {
      movieCategory: "Trending",
      icon: <Flame />,
    },
    {
      movieCategory: "Action",
      icon: <Swords />,
      genreId: 28,
    },
    {
      movieCategory: "Romance",
      icon: <Heart />,
      genreId: 10749,
    },
    {
      movieCategory: "Animation",
      icon: <Panda />,
      genreId: 16,
    },
    {
      movieCategory: "Horror",
      icon: <Ghost />,
      genreId: 27,
    },
    {
      movieCategory: "TV_Film",
      icon: <Star />,
      genreId: 10770,
    },
    {
      movieCategory: "Fantasy",
      icon: <Moon />,
      genreId: 14,
    },
  ];

  function handleCategory(category) {
    setFilteredCategories(category);
  }
  useEffect(() => {
    const fetchMovies = async () => {
      let url = "";
      if (filteredCategories !== "Trending") {
        const selectedCategory = movieCategories.find(
          (category) => category.movieCategory === filteredCategories
        );
        url = `https://api.themoviedb.org/3/discover/movie?with_genres=${selectedCategory.genreId}&api_key=63efd9bdf15c423e8869bd88d09598e1`;
      } else {
        url = `https://api.themoviedb.org/3/trending/movie/week?api_key=63efd9bdf15c423e8869bd88d09598e1`;
      }

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
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [filteredCategories]);
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <Hero
        filteredCategories={filteredCategories}
        movies={movies}
        loading={loading}
      />
      <Categories
        movieCategories={movieCategories}
        filteredCategories={filteredCategories}
        handleCategory={handleCategory}
      />

      <h2>Trending in {filteredCategories}</h2>

      <div className="trendingMovies">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default App;
