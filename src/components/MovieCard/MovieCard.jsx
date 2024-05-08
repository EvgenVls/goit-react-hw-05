import css from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  const defaultImg =
    "https://st4.depositphotos.com/7916244/28344/v/600/depositphotos_283444570-stock-illustration-movie-and-film-poster-modern.jpg";

  return (
    <div className={css.movieCard}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : defaultImg
        }
        alt={movie.title}
        width={500}
        height={750}
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
