<script>

export default {

  emits: ["filtered"],
  data() {
    return {
      searchText: "",
      searchList: [],
    };
  },
  methods: {
    handleFilter(searchList) {
      this.searchList.push(this.searchText);
      this.$emit("filtered", this.searchText);
      console.log("filtered", this.searchText);
      this.searchText = ""; // Clear the input field after pushing to the array
    },
  },
};
</script>
<template>
  <div class="filters">
    <input
      type="text"
      placeholder="Inserisci film o serie TV"
      v-model="searchText"
      @keyup.enter="handleFilter"
    />

    <button @click="handleFilter">cerca</button>
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
