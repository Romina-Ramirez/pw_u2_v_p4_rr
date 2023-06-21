<template>
  <h1 class="titulo">Calculadora Web</h1>
  <h2 class="taller">Tarea 7 - Calculadora Vue</h2>
  <div class="container">
    <div class="calculadora">
      <label class="pantalla">{{ pantalla }}</label>
      <label class="pantalla">{{ pantalla }}</label>
      <button v-on:click="mostrar('1')" class="boton">1</button>
      <button v-on:click="mostrar('2')" class="boton">2</button>
      <button v-on:click="mostrar('3')" class="boton">3</button>
      <button v-on:click="mostrar('+')" class="boton" id="operador">+</button>
      <button v-on:click="mostrar('4')" class="boton">4</button>
      <button v-on:click="mostrar('5')" class="boton">5</button>
      <button v-on:click="mostrar('6')" class="boton">6</button>
      <button v-on:click="mostrar('-')" class="boton" id="operador">-</button>
      <button v-on:click="mostrar('7')" class="boton">7</button>
      <button v-on:click="mostrar('8')" class="boton">8</button>
      <button v-on:click="mostrar('9')" class="boton">9</button>
      <button v-on:click="mostrar('/')" class="boton" id="operador">/</button>
      <button v-on:click="mostrar('0')" class="boton cero">0</button>
      <button v-on:click="calcularComputado" class="boton" id="igual">=</button>
      <button v-on:click="mostrar('*')" class="boton" id="operador">*</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculadora",
  data() {
    return {
      resultMostrado: true,
      pantalla: "",
      resultado: "",
    };
  },
  methods: {
    mostrar(elemento) {
      if (this.resultMostrado == true) {
        this.pantalla = elemento;
        this.resultMostrado = false;
      } else {
        this.pantalla += elemento;
      }
    },
  },
  computed: {
    calcularComputado() {
      console.log("Entró al método Computado.");
      try {
        this.resultado = eval(this.pantalla);
        this.pantalla = this.resultado;
      } catch (error) {
        this.pantalla = "ERROR";
      }
      this.resultMostrado = true;
    },
  },
};
</script>

<style>
* {
  color: black;
  text-align: center;
  font-family: Consolas;
}

body {
  background: url(../assets/madera.jpg);
}

.taller {
  font-style: italic;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculadora {
  display: grid;
  grid-template-columns: repeat(4, 75px);
  /*grid-template-rows: ;*/
  background-color: rgb(255, 187, 97);
  padding: 20px;
  border-radius: 20px;
  border: 10px solid rgb(146, 105, 51);
  box-shadow: 10px 10px 10px 1px rgb(60, 43, 21);
}

.cero {
  grid-column: span 2;
}

.pantalla {
  grid-column: span 4;
  border: 2px solid rgb(146, 105, 51);
  background-color: rgb(253, 207, 147);
  margin-bottom: 10px;
  text-align: right;
  padding: 5px 5px;
}

.boton {
  border-radius: 20px;
  border: none;
  padding: 7px;
  margin: 4px;
  background-color: rgb(233, 50, 142);
  box-shadow: 5px 5px 10px 0px rgb(153, 26, 89);
  color: aliceblue;
}

.boton:hover {
  background-color: rgb(170, 25, 97);
}
</style>