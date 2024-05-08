import { useState, useEffect, useRef } from "react";
import { useParams, NavLink, Outlet, useLocation } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { getMovieById } from "../../tmdb-api";
import MovieCard from "../../components/MovieCard/MovieCard";
import clsx from "clsx";
import css from "./MovieDetailsPage.module.css";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkURLRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function featchMovieById() {
      try {
        setLoading(true);
        const data = await getMovieById(movieId);

        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    featchMovieById();
  }, [movieId]);
  return (
    <div className={css.moviePage}>
      <NavLink to={backLinkURLRef.current} className={css.linkGoBack}>
        <SlArrowLeft />
        Go back
      </NavLink>
      {loading && <p>Please wait...</p>}
      {movie && <MovieCard movie={movie} />}
      <div>
        <h4>Additional information</h4>
        <ul className={css.addInfoList}>
          <li>
            <NavLink to="cast" className={getLinkClass}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={getLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
      {error && <p>Sorry! A request error occurred. Please try again later.</p>}
    </div>
  );
}
