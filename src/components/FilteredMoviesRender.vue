<script>
import { state } from "../state.js";
import LangFlag from "vue-lang-code-flags";
export default {
  data() {
    return {
      state,
    };
  },
  components: {
    LangFlag,
  },
  mounted() {
    /*RENDER MOVIES HOME PAGE- 1^ chiamata ajax*/
    state.fetchMovieData(state.api_url);
    state.fetchTVSeriesData(state.api_url_tv)
  },
};
</script>

<template>
  <div class="card col-4" v-for="card in state.movieCards">
    <div class="frontofcard">
      <img :src="state.img_prefix + card.poster_path" alt="" />
    </div>
    <div class="backofcard">
      <h3>{{ card.title }}</h3>
      <ul>
        <li>{{ card.original_title }}</li>
        <lang-flag
      :iso="card.original_language === 'cn' ? 'zh' : card.original_language"
    />
          
        <li>Voto: {{ state.starsRate(card.vote_average) }}</li>
        <i
          v-for="i in state.starsRate(card.vote_average)"
          class="fa-solid fa-star"
        ></i>
        <i
          v-for="i in 5 - state.starsRate(card.vote_average)"
          class="fa-regular fa-star"
        ></i>
      </ul>
    </div>
  </div>
</template>

<style scoped>

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
