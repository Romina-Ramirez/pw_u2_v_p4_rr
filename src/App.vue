<template>
  <NavBar/>
  <router-view />
</template>

<script>
import NavBar from './modules/pokemon/componentes/NavBar.vue'
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(0, 0, 0);
  margin-top: 60px;
}
</style>
