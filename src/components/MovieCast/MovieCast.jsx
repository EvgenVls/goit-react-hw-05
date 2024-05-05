import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCastById } from "../../tmdb-api";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function featchMovieCast() {
      try {
        setLoading(true);
        const data = await getMovieCastById(movieId);
        console.log(data);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    featchMovieCast();
  }, [movieId]);

  return (
    <div>
      {loading && <p>Please wait...</p>}
      {/* {cast.length > 0 && ( */}
      <ul>
        {cast.map((castItem) => {
          <li key={castItem.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${castItem.poster_path}`}
                alt=""
              />
              <p>{castItem.original_name}</p>
              <p>{castItem.character}</p>
            </div>
          </li>;
        })}
      </ul>
      {/* )} */}
      {error && <p>404</p>}
    </div>
  );
}
