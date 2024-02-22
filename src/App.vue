<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
import {state} from "./state.js";

export default {
  name: "App",
  data() {
    return {
      movieCards: [],
      state
    };
  },
  mounted() {
    console.log(state.api_url)
    const apiKey = 'b8a3cc58e76a00cf47574cfa4f055fb3';
    const apiUrl = 'https://api.themoviedb.org/3/search/movie';
    axios
      .get(apiUrl, {
        params: {
          language: 'it-IT',
          api_key: apiKey,
          query:'a',
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
  
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {},
};
</script>
<template>
 


<AppHeader></AppHeader>
  <AppMain></AppMain>
  <div class="card" v-for="card in movieCards">
   <img src=""+ {{card.poster_path}} alt={{ card.title }}>
   <h3>{{ card.title }}</h3>
  </div>
  <AppFooter></AppFooter>
  
</template>
<style scoped>

.card{
  color: aliceblue;
}
</style>
