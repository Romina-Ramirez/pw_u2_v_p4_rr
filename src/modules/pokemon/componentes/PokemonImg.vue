<template>
  <div class="contenedorImg">
    <img
      class="ocultaPokemon"
      :src="imagenFuente"
      alt="No se puede mostrar la imagen."
    />
    <img v-if="muestraPokemon" :src="imagenFuente" alt="No se puede mostrar la imagen." />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    muestraPokemon: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    imagenFuente() {
      console.log("Hola");
      //   return (
      //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
      //     this.pokemonId +
      //     ".svg"
      //   );
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.ocultaPokemon {
  filter: brightness(0);
}

img {
  position: absolute;
  height: 200px;
  right: 38%;
}

.contenedorImg {
  height: 200px;
}
</style>