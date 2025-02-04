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

  & input {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: var(--bool-light);
    transition: all 0.3s ease;
    width: 200px;
    outline: none;
    padding: 0.5rem;
    margin: 0.2rem;
    border-radius: 0.25rem;
  }

  & input:focus {
    width: 300px;
    border-color: rgba(255, 255, 255, 0.7);
  }

  & button {
    color: var(--bool-light);
    background-color: var(--bool-accent);
    padding: 0.5rem;
    margin: 0.2rem;
    border-radius: 0.25rem;
    border-style: none;
  }
}

@media (max-width: 768px) {
  .filters {
    display: flex;
    flex-direction: column;
    align-items: center;
  margin-top: 1rem;
  margin-right: 0.5rem;

  & input {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: var(--bool-light);
    transition: all 0.3s ease;
    width: 100px;
    outline: none;
    padding: 0.5rem;
    margin: 0.2rem;
    border-radius: 0.25rem;
  }

  & input:focus {
    width: 300px;
    border-color: rgba(255, 255, 255, 0.7);
  }

  & button {
    color: var(--bool-light);
    background-color: var(--bool-accent);
    padding: 0.5rem;
    margin: 0.2rem;
    border-radius: 0.25rem;
    border-style: none;
  }
}
}
</style>