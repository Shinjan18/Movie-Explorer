function MovieCard({ movie }) {

  const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (

    <div className="movie-card">

      <img src={image} alt={movie.title} />

      <div className="movie-info">

        <h3>{movie.title}</h3>

        <p>⭐ {movie.vote_average}</p>
        <p>Release: {movie.release_date}</p>
      </div>

    </div>

  );
}

export default MovieCard;