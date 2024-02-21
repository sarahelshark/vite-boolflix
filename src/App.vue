<script>
import axios from "axios";
export default {
  name: "App",
  mounted() {
    const apiKey = 'b8a3cc58e76a00cf47574cfa4f055fb3';
    const apiUrl='https://api.themoviedb.org/3/trending/all/day'
    axios
      .get(apiUrl, {
        params: {
          language:'it-IT',
          api_key: apiKey,

        },
      })
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
