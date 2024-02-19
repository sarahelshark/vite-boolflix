<script>
import axios from "axios";
export default {
  name: "App",
  mounted() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/11?api_key=b8a3cc58e76a00cf47574cfa4f055fb3b8a3cc58e76a00cf47574cfa4f055fb3'
      )
      .then((response) => {
        console.log(response);
      })
      .catch(error =>{
        console.group(error);
      })
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<template>
  <h1 @click="error">hello</h1>
</template>
<style></style>
