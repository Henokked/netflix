const Api_key =import.meta.env.VITE_API_URL;
// import.meta.env.VITE_API_URL;
// const Api_key ="f2c68236bf33409a9fa85c21471dc282";

console.log(Api_key)
const requests = {
  fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-us`,
  fetchNetflixOrginals: `/discover/tv?api_key=${Api_key}&with_network=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${Api_key}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${Api_key}&language=en-us&page=1`,
 
};
export default requests;