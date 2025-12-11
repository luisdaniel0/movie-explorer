import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const year = movie.release_date.slice(0, 4);

  return (
    <div className="movieCard">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3 className="movieTitle">{movie.title}</h3>
      <p className="movieYearRating">
        ⭐{movie.vote_average} | {year}
      </p>
    </div>
  );
};

export default MovieCard;
