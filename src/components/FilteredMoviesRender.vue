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
    state.fetchTVSeriesData(state.api_url_tv);
  },
};
</script>

<template>
  <div class="card col-4 col-lg col-md col-sm" v-for="card in state.movieCards">
    <div class="frontofcard">
      <img :src="state.img_prefix + card.poster_path" :alt="card.title" />
    </div>
    <div class="backofcard">
      <h3>{{ card.title }}</h3>
      <ul>
        <li>Titolo Originale: {{ card.original_title }}</li>
        <li><lang-flag :iso="card.original_language === 'cn' ? 'zh' : card.original_language"/></li>
        <li>Voto: {{ state.starsRate(card.vote_average) }}</li>
        <i
          v-for="i in state.starsRate(card.vote_average)"
          class="fa-solid fa-star"
        ></i>
        <i
          v-for="i in 5 - state.starsRate(card.vote_average)"
          class="fa-regular fa-star"
        ></i>
        <li v-if="card.overview.length < 200">{{ card.overview }}</li>
        <li v-else="card.overview.length > 200">
          <a
            >Per vedere la descrizione completa di
            "{{ card.title }}" <strong>click me!</strong> </a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/*#region of cards rotating */

.card {
  height: 400px;
  width: 300px;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.8s ease-in;
}
.frontofcard,
.backofcard {
  height: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: absolute;
  color: var(--bool-light);
  padding: 0.5rem 0.5rem;
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

@media screen and (max-width: 1024px) {
  .col-lg {
    width: calc(100% / 3);
  }
}

@media screen and (max-width: 868px) {
  .col-md {
    width: calc(100% / 2);
  }
}
@media screen and (max-width: 679px) {
  .col-sm {
    width: 70%;
    margin: auto;
    margin-bottom: 1rem;
  }
}
</style>
