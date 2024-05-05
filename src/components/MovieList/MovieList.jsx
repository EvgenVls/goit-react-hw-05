import MoviePoster from "../MoviePoster/MoviePoster";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MoviePoster movie={movie} />
        </li>
      ))}
    </ul>
  );
}
