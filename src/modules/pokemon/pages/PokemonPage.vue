<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonId="pokemon" :muestraPokemon="false" />
  <PokemonOps :opciones="arreglo" />
</template>

<script>
import PokemonImg from "../componentes/PokemonImg.vue";
import PokemonOps from "../componentes/PokemonOps.vue";

import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";

console.log(obtenerFachadaPokemons());

export default {
  data() {
    return {
      arreglo: null,
      pokemon: null
    };
  },
  components: {
    PokemonImg,
    PokemonOps,
  },
  methods: {
    async cargaJuegoInicial() {
      const arregloPokemons = await obtenerFachadaPokemons();
      console.log(arregloPokemons);
      this.arreglo = arregloPokemons;
      this.pokemon = arregloPokemons[0].id
    },
  },
  mounted() {
    console.log("Se montó el componente.");
    this.cargaJuegoInicial();
  },
};
</script>

<style>
html,
body {
  background: radial-gradient(
    circle,
    rgba(255, 154, 118, 1) 0%,
    rgba(255, 102, 137, 1) 100%
  );
}

h1 {
  font-family: "Courier New", Courier, monospace, Times, serif;
}
</style>