<template>
  <h3>{{ evaluarTitulo }}</h3>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <button @click="aumentarNumero">+</button>
  <button @click="disminuirNumero">-</button>
</template>

<script>
export default {
  name: "Contador",
  data() {
    return {
      numero: this.inicio,
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
    evaluarTitulo() {
      return this.tituloComponente || "Valor por defecto";
    },
  },
  props: {
    titulo: String,
    inicio: {
      type: Number,
      required: false,
      default: 100,
      validator(value) {
        return value > 100;
      },
    },
  },
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