<template>
  <div class="container">
    <h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
    <div v-else>
      <h1>Juego Pokemon</h1>
      <PokemonImg :pokemonId="pokemonCorrecto.id" :muestraPokemon="mostrar" />
      <PokemonOps
        :opciones="arreglo"
        @seleccionado="revisarSeleccion($event)"
      />
      <button @click="actualizar()">Probar otro</button>
    </div>
  </div>
</template>

<script>
import PokemonImg from "../componentes/PokemonImg.vue";
import PokemonOps from "../componentes/PokemonOps.vue";

import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";

console.log(obtenerFachadaPokemons());

export default {
  data() {
    return {
      arreglo: [],
      pokemonCorrecto: null,
      mostrar: false,
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
      const indicePokemon = Math.floor(Math.random() * 4);
      this.pokemonCorrecto = this.arreglo[indicePokemon];
    },
    revisarSeleccion(idSeleccionado) {
      console.log("Evento en el padre");
      if (idSeleccionado === this.pokemonCorrecto.id) {
        this.mostrar = true;
        console.log("Seleccionado Correcto");
      } else {
        this.mostrar = false;
        console.log("Seleccionado Incorrecto");
      }
    },
    actualizar() {
      location.reload();
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
    rgb(254, 93, 130) 100%
  );
}

h1 {
  font-family: "Courier New", Courier, monospace, Times, serif;
}

button {
  border: 2px solid #27cce2;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  background-color: #82f0ff;
  padding: 5px 10px;
  font-family: "Courier New", Courier, monospace, Times, serif;
  font-weight: bold;
  font-size: large;
}

button:hover {
  background-color: #27cce2;
  border: 2px solid #138a9a;
}
</style>