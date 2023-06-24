<template>
  <img v-if="urlImg" :src="urlImg" alt="No se puede mostrar la imagen." />
  <div class="bg-dark"></div>
  <div class="container">
    <h1>Caracola Mágica</h1>
    <input v-model="pregunta" type="text" placeholder="Hazme una pregunta." />
    <p>Recuerda terminar con un signo de interrogación la pregunta.</p>

    <div>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta.toUpperCase() }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "",
      respuesta: "",
      urlImg: null,
    };
  },
  watch: {
    pregunta(value, oldValue) {
      console.log(value);
      console.log(oldValue);
      if (value.includes("?")) {
        console.log("Consumir el API");
        this.respuesta = 'Espere por favor.'
        this.consumirAPI();
        this.pregunta = ''
      }
    },
  },
  methods: {
    async consumirAPI() {
      const respuesta = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );
      console.log(respuesta);
      const { answer, image } = respuesta;
      console.log(answer);
      console.log(image);
      this.respuesta = answer;
      this.urlImg = image;
    },
  },
};
</script>

<style>
.bg-dark,
img {
  height: 100vh;
  width: 100vw;
  left: 0px;
  max-width: 100%;
  max-height: 100%;
  position: fixed;
  top: 0px;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.container {
  text-align: center;
  position: relative;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
}

p,
h1,
h2 {
  color: white;
  font-weight: bold;
}

p {
  font-size: 20px;
  margin-top: 20px;
}
</style>