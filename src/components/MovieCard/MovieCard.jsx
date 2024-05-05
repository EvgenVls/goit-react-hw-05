export default function MovieCard({ movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2>
          {movie.title} ({movie.release_date})
        </h2>
        <p>User score: {movie.vote_average}</p>
        <h4>Overview</h4>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>Arrey of objects-name</p>
      </div>
    </div>
  );
}
