import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getMovieById } from "../../tmdb-api";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

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
    <div>
      {loading && <p>Please wait...</p>}
      {movie && <MovieCard movie={movie} />}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
      {error && <p>404</p>}
    </div>
  );
}
