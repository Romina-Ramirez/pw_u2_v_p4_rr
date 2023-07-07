<template>
  <div>
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/juego">Juego</router-link>
    <router-link to="/premios">Premios</router-link>
    <router-link to="/pokemon">Pokemon</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
div {
  padding: 0px 30px;
}
div a {
  font-weight: bold;
  color: #d3e8ff;
  margin: 0px 10px;
}
</style>