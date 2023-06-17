<template>
  <h3>{{ tituloComponente }}</h3>
  <h3>{{ titulo }}</h3>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <button v-on:click="aumentarNumero">+</button>
  <button v-on:click="disminuirNumero">-</button>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      numero: 5,
      tituloComponente: this.titulo,
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("Entró al método cuadrado.");
      return this.numero * this.numero;
    },
    aumentarNumero() {
      return this.numero++;
    },
    disminuirNumero() {
      return this.numero--;
    },
  },
  computed: {
    obtenerCuadradoComputado() {
      console.log("Entró al método cuadrado computado.");
      return this.numero * this.numero;
    },
  },
  props: ["titulo", "valor2"],
};
</script>

<style>
body {
  background-color: #e3e3e3;
}

button {
  background-color: #64b687;
  border-radius: 5px;
  border: 2px solid #416569;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
}

button:hover {
  background-color: #416569;
  border: 2px solid #35495e;
}
</style>