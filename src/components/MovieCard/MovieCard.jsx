import css from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  return (
    <div className={css.movieCard}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2>
          {movie.title} ({new Date(movie.release_date).getFullYear()})
        </h2>
        <p>User score: {movie.vote_average} of 10</p>
        <h4>Overview</h4>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>
          {movie.genres.map((genre) => {
            return `${genre.name} `;
          })}
        </p>
      </div>
    </div>
  );
}
