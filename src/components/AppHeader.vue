<script>
import AppLogo from "./AppLogo.vue";
import AppSearchBox from "./AppSearchBox.vue";

export default {
  data() {
    return {
      searchText: "",

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
  justify-content: space-between;
  align-items: center;
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
</style>
