<template>
  <div class="contenedorOpciones">
    <!-- <ul> -->
    <!-- <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li> -->
    <li v-for="pokemon in opciones" :key="pokemon.id">{{ pokemon.nombre }}</li>
    <!-- </ul> -->
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
};
</script>

<style scoped>
.contenedorOpciones {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* ul {
  list-style-type: none;
} */

li {
  list-style-type: none;
  border: 2px solid #6971ff;
  border-radius: 5px;
  background-color: white;
  margin-top: 20px;
  width: 200px;
  cursor: pointer;
  background-color: #a2a6ff;
  padding: 1px;
  font-family: "Courier New", Courier, monospace, Times, serif;
}

li:hover {
  background-color: #6971ff;
  border: 2px solid #4953ff;
}
</style>