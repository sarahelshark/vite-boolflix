<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppMain from "./components/AppMain.vue";


export default {
  name: "App",
  
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {},
};
</script>
<template>
 


<AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
  
</template>
<style >

</style>
