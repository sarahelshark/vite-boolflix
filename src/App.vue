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
  <div class="container">
         <div class="row">
           <div class="card col-4" v-for="card in movieCards">
             <img :src="state.img_prefix+card.poster_path" alt="">
            <h3>{{ card.title }}</h3>
        </div>

        </div>

   </div>
  <AppFooter></AppFooter>
  
</template>
<style scoped>
.container
{
 display: flex;
  width: 80%;
  max-width: 1176px;
  margin: auto;
  gap: .5rem;
  margin-top: 2.5rem;
}

.row
{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 2rem;
  flex-grow: 1;
  width: 80%;
 
}
.card{
    color: rgb(220, 194, 23);
    margin: auto;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
[class^="col-"]{
  padding: 1rem;
}

.col-4
{
  width: calc(100% / 4);
}
</style>
