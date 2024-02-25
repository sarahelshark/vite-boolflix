<script>
import { state } from "../state.js";
import axios from "axios";

export default {
  data() {
    return {
      state,
      
    };
  },
  methods: {
    
  },
  mounted() {
    /*RENDER MOVIES HOME PAGE- 1^ chiamata ajax*/
    state.fetchMovieData(state.api_url);

    //posso fare altra chiamata per serie tv sullo stesso mounted? 2^CHIAMATA
    //this.fetchTVSeriesData()
  },
};
</script>
<template>
  
  <div class="container">
    <div class="row">
      <div class="notAvailable" v-show="state.showDiv">
        Spiacenti! Nessun film disponibile al momento, prova a cercare un altro
        titolo.
      </div>
      <div class="card col-4" v-for="card in state.movieCards">
        <div class="frontofcard">
          <h3>{{ card.title }}</h3>
          <img :src="state.img_prefix + card.poster_path" alt="" />
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



/*#region of cards rotating */

.frontofcard {
  font-size: 14px;
}
.card {
  height: 400px;
  width: 300px;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.8s ease-in;
}
.frontofcard,
.backofcard {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: var(--bool-light);
  padding: auto;
}
.card:hover {
  transform: rotateY(180deg);
}
.frontofcard {
  backface-visibility: hidden;
}
.backofcard {
  backface-visibility: hidden;
  transform: rotateY(180deg);
}
/*#endregion of cards rotating */
[class^="col-"] {
  padding: 1rem;
}

.col-4 {
  width: calc(100% / 4);
}
</style>
