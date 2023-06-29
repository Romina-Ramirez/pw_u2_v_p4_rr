<template>
  <div class="contenedorOpciones">
    <!-- <ul> -->
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    <!-- </ul> -->
  </div>
</template>

<script>
export default {};
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
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  margin-block: 10px;
  width: 200px;
  cursor: pointer;
}

li:hover {
  background-color: rgb(255, 228, 169);
}
</style>