<script>

import { state } from "../state.js";
import FilteredMoviesRender from "./FilteredMoviesRender.vue";
import FilteredTVSeriesRender from "./FilteredTVSeriesRender.vue";
import LangFlag from "vue-lang-code-flags";

export default {
  data() {
    return {
      state,
    };
  },
 
  mounted(){
    
  },
  components:{
    FilteredMoviesRender,
    FilteredTVSeriesRender,
    LangFlag,
},
};
</script>
<template>
  <div class="container">
    <div class="row">

      <div class="notAvailable" v-show="state.showDiv">
        Spiacenti! Nessun film disponibile al momento, prova a cercare un altro
        titolo.
      </div>  <!--no results-->

      <FilteredMoviesRender></FilteredMoviesRender> <!--movies component-->
      <FilteredTVSeriesRender></FilteredTVSeriesRender><!--tv series component--> 

    </div>
  </div>
</template>
<style scoped>

.container {
  display: flex;
  width: 80%;
  max-width: 1176px;
  margin: auto;
  gap: 0.5rem;
  margin-top: 2.5rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 2rem;
  flex-grow: 1;
  width: 80%;
}


</style>
