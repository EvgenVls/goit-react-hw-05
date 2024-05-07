import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTlhMDJhYzFkOThhMzE2NzVmZTU0ZDE3ODBkNWE5MyIsInN1YiI6IjY2MzRhNzIzMDc5MmUxMDEyMzc5ZmUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BJaEZZiMFhaoKR4G3RK_B59DL340FCPsh-JILlYBLdk",
  },
};

export const getMovies = async () => {
  const responce = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return responce.data.results;
};

export const getMovieById = async (movieId) => {
  const responce = await axios.get(`/movie/${movieId}?language=en-US`, options);
  return responce.data;
};

export const getMoviesByName = async (titleMovie) => {
  const responce = await axios.get(
    `/search/movie?query=${titleMovie}&include_adult=false&language=en-US&page=1`,
    options
  );
  return responce.data.results;
};

export const getMovieCastById = async (movieId) => {
  const responce = await axios.get(
    `/movie/${movieId}/credits?language=en-US`,
    options
  );
  return responce.data.cast;
};

export const getMovieReviewsById = async (movieId) => {
  const responce = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return responce.data.results;
};
