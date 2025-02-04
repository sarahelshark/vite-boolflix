import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  /**reactive object- global state  */

  //#region reactive datas
  
  searchText: "",
  //#endregion reactive datas

  //#region arrays 
  movieCards: [],
  tvCards: [],
  filteredMovieCards: [],

  //#endregion arrays 

  //#region URLs 
  api_url_tv:
    "https://api.themoviedb.org/3/search/tv?api_key=b8a3cc58e76a00cf47574cfa4f055fb3&language=it-IT",
  api_url:
    "https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=b8a3cc58e76a00cf47574cfa4f055fb3",

  img_prefix: `https://image.tmdb.org/t/p/w342/`,

  //#endregion URLs 

  //#region methods

  filterResults(showDiv) {
    this.showDiv = false;
    //resetto il messaggio in pagina se si effettua un'altra ricerca dopo il messaggio informativo

    /*costruisco qui dentro una chiamata ajax MOVIES dove costruisco il nuovo url> quella dentro fetchdata  */
    const url = `${state.api_url}&query=${state.searchText}`;

    axios
      .get(url)
      .then((response) => {
        // Filter movies with rating > 0 and valid poster_path
        state.movieCards = response.data.results.filter(movie => 
          movie.vote_average > 0 && 
          movie.poster_path && 
          movie.poster_path !== null && 
          movie.poster_path !== ''
        );
        console.log('Filtered movies:', state.movieCards);
        
      })
      .catch((error) => {
        console.error(error);
      });

    /*costruisco qui dentro una chiamata ajax  SERIE TV dove costruisco il nuovo url> quella dentro fetchdata  */

    const urlTV = `${state.api_url_tv}&query=${state.searchText}`;

    axios
      .get(urlTV)
      .then((response) => {
         // Filter TV shows with rating > 0 and valid poster_path
         state.tvCards = response.data.results.filter(show => 
          show.vote_average > 0 && 
          show.poster_path && 
          show.poster_path !== null && 
          show.poster_path !== ''
        );
        console.log('Filtered TV shows:', state.tvCards);        
      })
      .catch((error) => {
        console.error(error);
      });

    this.searchText = ""; // Clear the input

    //faccio apparire messaggio in pagina> lo trasformo in una funzione migliore dopo...
  },

  fetchMovieData(url) {
    //console.log(state.api_url);
    const apiKey = "b8a3cc58e76a00cf47574cfa4f055fb3";
    const apiUrl = "https://api.themoviedb.org/3/search/movie";
    axios
      .get(apiUrl, {
        params: {
          language: "it-IT",
          api_key: apiKey,
          query: "a",
        },
      })
      .then((response) => {
        console.log(response.data.results);
        this.movieCards = response.data.results; //carico array cards con i dati della api
      })
      .catch((error) => {
        console.error(error);
      });
  },

  fetchTVSeriesData(urlTV) {
    axios
      .get(urlTV)
      .then((response) => {
        state.tvCards = response.data.results;
        console.log(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  starsRate(vote) {
    return Math.round(vote / 2);
  },

  //#endregion methods
  
});
