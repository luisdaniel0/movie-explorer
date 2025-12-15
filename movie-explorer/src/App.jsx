import MovieCard from "./components/MovieCard";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState, useEffect } from "react";
import {
  Flame,
  Swords,
  Heart,
  Panda,
  Ghost,
  Star,
  Moon,
  ArrowBigRight,
  ArrowBigLeft,
} from "lucide-react";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState("Trending");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  function getCurrentPageMovies(moviesArr) {
    const moviesPerPage = 5;
    const startIndex = currentPage * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;

    return moviesArr.slice(startIndex, endIndex);
  }

  function handleNextButton() {
    const moviesPerPage = 7;
    const totalPages = Math.ceil(movies.length / moviesPerPage);
    if (currentPage >= totalPages - 1) {
      return;
    }
    setCurrentPage(currentPage + 1);
  }

  function handlePrevButton() {
    if (currentPage <= 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
  }

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
    setCurrentPage(0);
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
  if (filteredCategories)
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
        <h3>{filteredCategories}</h3>

        <div className="trendingMovies">
          {getCurrentPageMovies(movies).map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
        <div className="carouselButtons">
          <button className="carouselButton" onClick={handlePrevButton}>
            <ArrowBigLeft />
          </button>
          <button className="carouselButton" onClick={handleNextButton}>
            <ArrowBigRight />
          </button>
        </div>
      </>
    );
};

export default App;
