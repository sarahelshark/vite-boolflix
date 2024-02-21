<script>
export default {
    emits:['filtered'],
    data(){
        return{
            searchText: "",
        }
    },
    methods: {
    handleFilter() {
      this.$emit('filtered', this.searchText);
      console.log('it works', this.searchText);
    },
    }

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

    <button @click="handleFilter">
      cerca
    </button>

 </div>
</template>

<style scoped>
.filters{ 
    margin-top: 1rem;

    & > button{
        color: var(--bool-light);
        background-color: var(--bool-accent);
    }
    
    & input,
    & > select,
    & > button 
    {
        padding: .75rem;
        margin: .1rem;
        border-radius: .25rem;
        border-style: none;

    }

}</style>


