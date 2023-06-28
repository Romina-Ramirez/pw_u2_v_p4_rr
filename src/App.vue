<template>
  <Desafio />
</template>

<script>
// import PokemonPage from './modules/pokemon/pages/PokemonPage.vue'
import Desafio from "./components/Desafio.vue";
export default {
  name: "App",
  components: {
    // PokemonPage,
    Desafio,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
</style>
