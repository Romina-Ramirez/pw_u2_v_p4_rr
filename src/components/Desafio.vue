<template>
  <div class="container">
    <h1 id="titulo">¿Puedes resolver el desafío?</h1>
    <br />
    <h2 id="instruc">
      Deberás elegir si las siguientes preguntas son verdaderas o falsas.
    </h2>
    <div class="pregunta">
      <h2>{{ preguntaActual.pregunta }}</h2>
      <button @click="comprobarRespuesta(true)">Verdadero</button>
      <button @click="comprobarRespuesta(false)">Falso</button>
      <br />
      <img v-if="urlImg" :src="urlImg" alt="No se pudo cargar la imagen." />
      <h1>{{ esCorrecto.toUpperCase() }}</h1>
    </div>
    <button
      :disabled="botonHabilitado"
      id="botonSiguiente"
      @click="siguientePregunta()"
    >
      Siguiente Pregunta
    </button>
    <br />
    <h1 id="felicidades">{{ etiquetaFin }}</h1>
    <button @click="reiniciar()">Reiniciar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preguntas: [
        {
          pregunta: "¿El río Nilo es el más caudaloso del mundo?",
          respuesta: false,
        },
        {
          pregunta:
            "¿El caballo de Don Quijote de la Mancha se llamaba Rocinante?",
          respuesta: true,
        },
        {
          pregunta: "¿La tabla periódica tiene un total de 119 elementos?",
          respuesta: false,
        },
        {
          pregunta: "¿La primera película de Disney fue Cenicienta?",
          respuesta: false,
        },
        {
          pregunta: "¿La flor de cerezo es la flor nacional de Japón?",
          respuesta: true,
        },
        {
          pregunta: "¿La saga de Harry Potter tiene 8 libros?",
          respuesta: false,
        },
      ],
      preguntaIndice: 0,
      desafioTerminado: false,
      etiquetaFin: "",
      esCorrecto: "",
      urlImg: null,
      botonHabilitado: true,
    };
  },
  methods: {
    comprobarRespuesta(respuestaUsuario) {
      this.desafioTerminado = true;

      if (respuestaUsuario === this.preguntaActual.respuesta) {
        this.esCorrecto = "yes";
        this.consumirAPI(this.esCorrecto);
        this.botonHabilitado = false;
      } else {
        this.esCorrecto = "no";
        this.consumirAPI(this.esCorrecto);
      }
    },
    siguientePregunta() {
      if (this.preguntaIndice < this.preguntas.length - 1) {
        this.preguntaIndice++;
        this.desafioTerminado = false;
        this.etiquetaFin = "";
        this.urlImg = "";
        this.esCorrecto = "";
        this.botonHabilitado = true;
      } else {
        this.etiquetaFin = "Felicidades, completaste los desafíos.";
      }
    },
    async consumirAPI(respuestaCorrecta) {
      const correcto = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
      const { answer, image } = correcto;
      if (answer === respuestaCorrecta) {
        this.esCorrecto = answer;
        this.urlImg = image;
      } else {
        this.consumirAPI(respuestaCorrecta);
      }
    },
    reiniciar() {
      this.preguntaIndice = 0;
      this.desafioTerminado = false;
      this.etiquetaFin = "";
      this.esCorrecto = "";
      this.urlImg = null;
      this.botonHabilitado = true;
    },
  },
  computed: {
    preguntaActual() {
      return this.preguntas[this.preguntaIndice];
    },
  },
};
</script>

<style>
* {
  font-family: "Courier New", Courier, monospace, Times, serif;
  color: black;
}

body {
  background: #4ea8de;
}

.pregunta {
  background: #64dfdf;
  border-radius: 15px;
  box-shadow: 10px 10px 20px 0px rgb(10, 92, 104);
  margin: 25px;
  padding: 10px 0px;
}

img {
  height: 200px;
}

button {
  background: #6930c3;
  margin: 10px;
  border: 2px solid #480071;
  border-radius: 5px;
  width: 100px;
  padding: 10px;
  font-weight: bold;
  box-shadow: 5px 5px 10px 0px #35064f;
}

#botonSiguiente {
  width: 150px;
}

#botonSiguiente:disabled {
  background: #7c5cb0;
  color: rgb(65, 59, 59);
}

#titulo,
#instruc,
#felicidades {
  color: white;
}
</style>