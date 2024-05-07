import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByName } from "../../tmdb-api";
import FilterForm from "../../components/FilterForm/FilterForm";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const ownerParam = searchParams.get("query") ?? "";
  console.log(ownerParam);

  const changeSearchParam = (newSearch) => {
    searchParams.set("query", newSearch);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    async function featchMovieByTitle() {
      try {
        setLoading(true);
        const data = await getMoviesByName(ownerParam);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    featchMovieByTitle();
  }, [ownerParam]);

  return (
    <div>
      <FilterForm onSearch={changeSearchParam} />
      {loading && <p>Please wait...</p>}
      {error && <p>404</p>}
      <MovieList movies={movies} />
    </div>
  );
}
