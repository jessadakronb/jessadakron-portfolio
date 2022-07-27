<template>
  <div id="app">
    <div class="home">
      <navbar />
      <horizontal-divider />
      <profile />
      <horizontal-divider />
      <experience />
      <horizontal-divider />
      <skills />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HorizontalDivider from "./components/HorizontalDivider.vue";
import Profile from "./components/Profile.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Navbar,
    HorizontalDivider,
    Profile,
    Experience,
    Skills,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #1a202c;
  font-family: "canada-type-gibson";
  overflow-x: hidden;
}
.home {
  max-width: 870px;
  margin: 2rem auto;
}
@media screen and (max-width: 1500px) {
  .home {
    margin: 2rem 20rem;
  }
}

@media screen and (max-width: 1380px) {
  .home {
    margin: 2rem 15rem;
  }
}

@media screen and (max-width: 936px) {
  .home {
    margin: 2rem;
  }
}
</style>