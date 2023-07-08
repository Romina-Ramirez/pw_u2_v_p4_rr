<template>
  <div class="container">
    <img src="../store/Logo.png" alt="No se puede mostrar la imagen." />
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/instrucciones">¿Cómo jugar?</router-link>
    <router-link to="/juego">Juego</router-link>
    <router-link to="/premios">Premios</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  color: black;
}

img {
  height: 25px;
  position: relative;
  top: 2px;
}

a {
  padding: 0px 70px;
  position: relative;
  top: -4px;
}

.container {
  background: #a2a6ff;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid #6971ff;
}
</style>