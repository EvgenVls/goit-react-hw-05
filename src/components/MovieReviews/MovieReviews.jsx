import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsById } from "../../tmdb-api";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function featchMovieCast() {
      try {
        setLoading(true);
        const data = await getMovieReviewsById(movieId);
        setReviews(data);
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
      {reviews.length > 0 ? (
        <ul className={css.reviewsList}>
          {reviews.map((review) => (
            <li key={review.id}>
              <h5>Author: {review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don&apos;t have any reviews for this movie</p>
      )}
      {error && <p>Sorry! A request error occurred. Please try again later.</p>}
    </div>
  );
}
