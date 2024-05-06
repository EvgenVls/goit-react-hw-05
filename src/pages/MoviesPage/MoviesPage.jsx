import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByName } from "../../tmdb-api";
import FilterForm from "../../components/FilterForm/FilterForm";
// import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const ownerParam = searchParams.get("query") ?? "";

  const changeSearchParam = (newSearch) => {
    searchParams.set("query", newSearch);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    async function featchMovieByTitle() {
      try {
        setLoading(true);
        const data = await getMoviesByName();
        console.log(data);
        setMovies(data);
        console.log(movies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    featchMovieByTitle();
  }, []);

  return (
    <div>
      <FilterForm onSearch={changeSearchParam} />
      {loading && <p>Please wait...</p>}
      {error && <p>404</p>}
    </div>
  );
}
