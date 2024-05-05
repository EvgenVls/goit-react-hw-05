import { NavLink } from "react-router-dom";

export default function MoviePoster({ movie: { id, poster_path, title } }) {
  return (
    <NavLink to={`/movies/${id}`}>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
    </NavLink>
  );
}
