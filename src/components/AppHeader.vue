
<script>
import AppLogo from "./AppLogo.vue";
    export default {
        data() {
    return {
      menu: [
        {
          text: "Home",
          active: true,
        },
        {
          text: "Serie TV",
          active: false,
        },
        {
          text: "Film",
          active: false,

        },
        {
          text: "Nuovi e popolari",
          active: false,

        },
      ],
    };
  }, 
  components: {
    AppLogo,
  },
  methods: {
    toggleChangeClass(item, index) {
      this.menu.forEach((item) => (item.active = false));
      this.menu[index].active = true;
    },
  },
    }
</script>
<template>
   
 <header>
    
    <div class="container">

        <div class="left-side">
          <AppLogo></AppLogo>
      </div>
        
      <div class="center">
        <ul>
          <li
            v-for="(item, index) in menu"
            :class="item.active ? 'active' : ''"
            @click="toggleChangeClass(item, index)"
          >
            <a href="#">{{ item.text }}</a>
          </li>
           </ul>
      </div>
       
      <div class="right-side">
        <!--searchbox--> meeeeeee
      </div>
    </div>
    

 </header>
    
</template>

<style scoped>

.container{

    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.center{
    & ul {
        margin-top:2rem;
        display: flex;
        justify-content: center;
       gap: 1rem;
        

    }
}

.active{
    color: var(--bool-accent); 
}
ul:hover{

}
</style>