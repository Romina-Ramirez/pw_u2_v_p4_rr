<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Calculadora />
  <!-- <Contador titulo="Estudiante" valor2="2" />
  <Contador titulo="Profesor" valor2="7" />
  <Contador titulo="Test Titulo" valor2="7" />  -->
</template>

<script>
import Calculadora from "./components/Calculadora.vue";
import Contador from "./components/Contador.vue";
export default {
  name: "App",
  components: {
    Calculadora,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
