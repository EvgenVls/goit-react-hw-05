import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  const defaultImg =
    "https://st4.depositphotos.com/7916244/28344/v/600/depositphotos_283444570-stock-illustration-movie-and-film-poster-modern.jpg";

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.listItem}>
          <NavLink
            to={`/movies/${movie.id}`}
            state={location}
            className={css.link}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
              width={300}
              height={450}
            />
            <p className={css.movieTitle}>{movie.title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
