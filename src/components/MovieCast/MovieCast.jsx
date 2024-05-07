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
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

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
      {cast.length > 0 && (
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
      )}
      {error && <p>404</p>}
    </div>
  );
}
