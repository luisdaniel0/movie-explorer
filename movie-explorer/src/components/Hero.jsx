import "./Hero.css";

const Hero = ({ movies }) => {
  console.log(movies);

  return (
    <div className="heroCards">
      <div className="heroLeft">
        <img
          src={`https://image.tmdb.org/t/p/w500${movies[0].backdrop_path}`}
          alt={movies[0].title}
        />
        <button className="playLeftMovieBtn">Play Movie</button>
        <h2 className="heroMovieTitle">{movies[0].title}</h2>
      </div>
      <div className="heroRight">
        <img
          src={`https://image.tmdb.org/t/p/w500${movies[1].backdrop_path}`}
          alt={movies[1].title}
        />
        <button className="playRightMovieBtn">Play Movie</button>
        <h2 className="heroMovieTitle">{movies[1].title}</h2>
      </div>
    </div>
  );
};

export default Hero;
