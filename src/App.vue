<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    const apiKey = "b8a3cc58e76a00cf47574cfa4f055fb3";
    const apiUrl = "https://api.themoviedb.org/3/trending/all/day";
    axios
      .get(apiUrl, {
        params: {
          language: "it-IT",
          api_key: apiKey,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        this.cards = response.data.results; //carico array cards con i dati della api
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
  <!-- ignoro 
   <div class="card" v-for="card in cards">
  {{ card.title }}
</div>
  -->



<AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
  
</template>
<style></style>
