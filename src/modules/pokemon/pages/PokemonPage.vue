<template>
  <h1 class="titulo" v-if="!pokemonCorrecto">Espere por favor...</h1>
  <div v-else>
    <img
      id="logo"
      src="../store/Logo.png"
      alt="No se puede mostrar la imagen."
    />
    <div class="containerPI">
      <label for="">Puntaje: {{ puntaje }}</label>
      <label for="">Intento: {{ intentos }}</label>
    </div>
    <PokemonImg :pokemonId="pokemonCorrecto.id" :muestraPokemon="mostrar" />
    <PokemonOps
      v-if="!deshabilitar"
      :opciones="arreglo"
      @seleccionado="revisarSeleccion($event)"
    />
    <h2>{{ mensajeMostrado }}</h2>
    <button @click="actualizar()">Probar otro</button>
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
      puntaje: 0,
      intentos: 0,
      ganaste: false,
      terminado: false,
      deshabilitar: false,
    };
  },
  components: {
    PokemonImg,
    PokemonOps,
  },
  computed: {
    mensajeMostrado() {
      if (this.terminado === true) {
        if (this.ganaste === true) {
          return (
            "Felicidades, ganaste el juego con puntaje: " + this.puntaje + "."
          );
        } else {
          return "Perdiste el juego. Deberías intentarlo de nuevo.";
        }
      } else {
        return "";
      }
    },
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
      this.intentos++;
      if (idSeleccionado === this.pokemonCorrecto.id && this.intentos === 3) {
        this.puntaje = 1;
      } else if (idSeleccionado === this.pokemonCorrecto.id) {
        if (this.intentos === 1) {
          this.puntaje = 5;
        } else if (this.intentos === 2) {
          this.puntaje = 2;
        }
      }
      this.decidirMensaje(this.intentos, this.puntaje);
    },
    decidirMensaje(int, punt) {
      this.intentos = int;
      this.puntaje = punt;
      if (this.intentos === 3 && this.puntaje === 0) {
        this.mostrar = true;
        this.ganaste = false;
        this.terminado = true;
        this.deshabilitar = true;
      }
      if (this.puntaje > 0) {
        this.mostrar = true;
        this.ganaste = true;
        this.terminado = true;
        this.deshabilitar = true;
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

<style scoped>
label {
  margin-inline: 50px;
  font-size: 20px;
  font-weight: bold;
}

.containerPI {
  margin-bottom: 20px;
}
</style>