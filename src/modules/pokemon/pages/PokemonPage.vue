<template>
  <h1>Juego Pokemon</h1>
  <PokemonImg :pokemonId="54" :muestraPokemon="false"/>
  <PokemonOps/>
</template>

<script>
import PokemonImg from '../componentes/PokemonImg.vue'
import PokemonOps from '../componentes/PokemonOps.vue'

export default {
    components: {
        PokemonImg,
        PokemonOps,
    }

}
</script>

<style>

</style>