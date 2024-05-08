import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCastById } from "../../tmdb-api";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  const defaultImg =
    "https://st.depositphotos.com/2159851/2383/v/600/depositphotos_23839719-stock-illustration-guy-in-disguise-costume.jpg";

  useEffect(() => {
    async function featchMovieCast() {
      try {
        setLoading(true);
        const data = await getMovieCastById(movieId);
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
      {cast.length > 0 ? (
        <ul className={css.castList}>
          {cast.map((castItem) => (
            <li key={castItem.id}>
              <div className={css.castCard}>
                <img
                  src={
                    castItem.profile_path
                      ? `https://image.tmdb.org/t/p/w200${castItem.profile_path}`
                      : defaultImg
                  }
                  alt="Profile photo"
                  width={200}
                  height={300}
                />
                <p className={css.castName}>{castItem.original_name}</p>
                {castItem.character && (
                  <p className={css.castCharacter}>
                    Character: {castItem.character}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don&apos;t have cast information for this movie</p>
      )}
      {error && <p>Sorry! A request error occurred. Please try again later.</p>}
    </div>
  );
}
