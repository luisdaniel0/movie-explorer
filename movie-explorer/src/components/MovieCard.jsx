import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3 className="movieTitle">{movie.title}</h3>
      <p className="movieYearRating">
        ⭐{movie.vote_average} | {movie.release_date}
      </p>
    </div>
  );
};

export default MovieCard;
