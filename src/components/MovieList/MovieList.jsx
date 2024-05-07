import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

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
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <p className={css.movieTitle}>{movie.title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
