<script>
import { state } from "../state.js";
export default {

  emits: ["filtered"],
  data() {
    return {
      state,
    };
  },
  methods: {
    showDivTest(){
      console.log('it works', state.searchText);
    }
  },
};
</script>
<template>
  <div class="filters">
    <input
      type="text"
      placeholder="Inserisci film o serie TV"
      v-model="state.searchText"
      @keyup.enter="state.filterResults"
    />
    <button @click="state.filterResults">cerca</button>
  </div>
</template>

<style scoped>
.filters {
  margin-top: 1rem;
  margin-right: 0.5rem;

  & > button {
    color: var(--bool-light);
    background-color: var(--bool-accent);
    
  }

  & input,
  & > select,
  & > button {
    padding: 0.5rem;
    margin: 0.2rem;
    border-radius: 0.25rem;
    border-style: none;
  }

}


</style>
