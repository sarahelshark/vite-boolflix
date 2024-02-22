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
            <div class="frontofcard">
               <img :src="state.img_prefix+card.poster_path" alt="">
              <h3>{{ card.title }}</h3>
            </div>

            <div class="backofcard">
              <h3>{{ card.title }}</h3>
              <ul>
                 <li>{{ card.original_title }}</li>
                 <li>{{ card.original_language }}</li>
                 <li>{{ card.vote_average }}</li>
              </ul>


            </div>
             
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

/*cards rotating */
.frontofcard{
  font-size: 14px;
  
}
.card{
    height: 400px;
    width: 300px;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.8s ease-in;
}
.frontofcard, .backofcard{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: var(--bool-light);
}
.card:hover{
  transform: rotateY(180deg);
}
.frontofcard{
  backface-visibility: hidden;
}
.backofcard{
  backface-visibility: hidden;
  transform: rotateY(180deg);
}
.card {  }

[class^="col-"]{
  padding: 1rem;
}

.col-4
{
  width: calc(100% / 4);
}
</style>
