import { useState, useEffect } from "react";
import { getMovies } from "../../tmdb-api.js";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function featchMovies() {
      try {
        setLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    featchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading && <div>Loading...</div>}
      {/* {movies.lenght > 0 && <MovieList movies={movies} />} */}
      <MovieList movies={movies} />
      {error && <div>404</div>}
    </div>
  );
}
