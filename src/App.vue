<script>
import axios from "axios";
export default {
  name: "App",
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b8a3cc58e76a00cf47574cfa4f055fb3"
      )
      .then((response) => {
        console.log(response.data);
        this.cards = response.data;
      })
      .catch((error) => {
        console.group(error);
      });

      


  },
  data() {
    return {
      cards: [],
    };
  },
  components: {},
  methods: {},
};
</script>
<template></template>
<style></style>
