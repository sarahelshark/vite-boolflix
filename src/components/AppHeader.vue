<script>
import AppLogo from "./AppLogo.vue";
import AppSearchBox from "./AppSearchBox.vue";

import { state } from "../state.js";

export default {
  data() {
    return {
      state,

      menu: [
        {
          text: "Home",
          active: true,
        },
        {
          text: "Series",
          active: false,
        },
        {
          text: "Film",
          active: false,
        },
        {
          text: "New",
          active: false,
        },
      ],
    };
  },
  components: {
    AppLogo,
    AppSearchBox,
  },
  methods: {
    toggleChangeClass(item, index) {
      this.menu.forEach((item) => (item.active = false));
      this.menu[index].active = true;
    },
    

  },
 
};
</script>
<template>
  <header>
    <div class="container">
      <div class="left-side">
        <AppLogo></AppLogo>
      </div>

      <div class="center">
        <ul>
          <li>
            <a
              v-for="(item, index) in menu"
              :class="item.active ? 'active' : ''"
              @click="toggleChangeClass(item, index)"
              href="#"
              >{{ item.text }}</a
            >
          </li>
        </ul>
      </div>

      <div class="right-side">
        <AppSearchBox></AppSearchBox>
      </div>
    </div>
  </header>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10%;
}
.center {
  & ul{
    padding: 1rem;
  }
  & li {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 2rem auto 0;
  }
}
a {
  color: var(--bool-light);
}
.active {
  color: var(--bool-accent);
  filter: drop-shadow(0 0 5px var(--bool-accent));
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 1rem;
    margin: 0 20%;
  }

  .left-side, .right-side {
    width: 100%;
    justify-content: center;
  }

  .center ul {
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  a {
    font-size: 0.9rem;
  }

  .center {
  & li {
    margin: 0 20%;
  }
}
}
</style>
