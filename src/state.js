import  {reactive} from 'vue'
import axios from "axios";

export const state = reactive ({

/**reactive object- global state  */
showDiv: false,
searchText: "",
      showDiv: false,
searchText: '',
    api_url:"https://api.themoviedb.org/3/search/movie?language=it-IT&api_key=b8a3cc58e76a00cf47574cfa4f055fb3",
    img_prefix: `https://image.tmdb.org/t/p/w200/`,
    movieCards:[],

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

    fetchTVSeriesData(){} //abbino SECONDA CHIAMATA
},
)
