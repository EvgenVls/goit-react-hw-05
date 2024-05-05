import axios from "axios";

// const accessKey = "4e9a02ac1d98a31675fe54d1780d5a93";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTlhMDJhYzFkOThhMzE2NzVmZTU0ZDE3ODBkNWE5MyIsInN1YiI6IjY2MzRhNzIzMDc5MmUxMDEyMzc5ZmUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BJaEZZiMFhaoKR4G3RK_B59DL340FCPsh-JILlYBLdk",
  },
};

export const getMovies = async () => {
  const responce = await axios.get(url, options);
  return responce.data.results;
};

export const getMovieById = async (movieId) => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return responce.data;
};

export const getMovieCastById = async (movieId) => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return responce.data.cast;
};

export const getMovieReviewsById = async (movieId) => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return responce.data;
};
