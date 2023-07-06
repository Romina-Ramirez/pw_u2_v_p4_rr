<template>
  <div class="contenedorOpciones">
    <li
      v-for="pokemon in opciones"
      :key="pokemon.id"
      @click="$emit('seleccionado', pokemon.id)"
    >
      {{ pokemon.nombre }}
    </li>
  </div>
</template>

<script>
export default {
  props: {
    opciones: {
      type: Array,
      required: true,
    },
  },
  methods: {
    pruebaEvento() {
      console.log("Prueba de evento");
    },
  },
};
</script>

<style scoped>
.contenedorOpciones {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

li {
  list-style-type: none;
  border: 2px solid #6971ff;
  border-radius: 5px;
  margin-top: 20px;
  width: 200px;
  cursor: pointer;
  background-color: #a2a6ff;
  padding: 1px;
  font-family: "Courier New", Courier, monospace, Times, serif;
  font-weight: bold;
}

li:hover {
  background-color: #6971ff;
  border: 2px solid #4953ff;
}
</style>