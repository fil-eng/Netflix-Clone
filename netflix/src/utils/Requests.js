const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrading: `/trending/all/week?${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?${API_KEY}&with_networks=123`,
  fetchTopRatedMovies: `/movie/top_rated?${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?${API_KEY}&with_genres=10749`,
  fetchDocumentaryMovies: `/discover/movie?${API_KEY}&with_genres=99`,
  fetchTvShow: `/tv/popular?${API_KEY}&language=en-US&page-1`,
};

// https://api.themoviedb.org/3/discover/tv?api_key=bc5627d7fea27768fa94651fba955d60&with_networks=123
// https://api.themoviedb.org/3/movie/top_rated?api_key=bc5627d7fea27768fa94651fba955d60&language=en-US
// https://api.themoviedb.org/3/discover/movie?api_key=bc5627d7fea27768fa94651fba955d60&with_genres=10749
// https://api.themoviedb.org/3/discover/movie?api_key=bc5627d7fea27768fa94651fba955d60&with_genres=28&poster_path=/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg
// // https://api.themoviedb.org/3/tv/popular?api_key=bc5627d7fea27768fa94651fba955d60&language=en-US&page-1
// https://image.tmdb.org/t/p/original/rj3jBAZwPiOgkwAy1205MAgLahj.jpg
