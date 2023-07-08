<template>
  <img id="logo" src="../store/Logo.png" alt="No se puede mostrar la imagen." />
  <h1>¡Bienvenido al emocionante mundo del juego de adivinar el Pokémon!</h1>
  <p>
    <img
      id="pikachu"
      src="../store/pikachuBienvenida.png"
      alt="No se puede mostrar la imagen."
    />
    ¿Crees que tienes lo necesario para convertirte en un verdadero Maestro
    Pokémon? Pon a prueba tus habilidades de adivinanza y descubre si puedes
    reconocer a todos los Pokémon en su forma más desafiante: ¡sus sombras!<br />
    <br />
    En este juego único, te enfrentarás a la sombra misteriosa de un Pokémon y
    tendrás que tomar una decisión rápida y precisa. Se te presentarán cuatro
    opciones en pantalla, pero solo una de ellas corresponde a la verdadera
    identidad del Pokémon en sombra. ¿Podrás descubrir quién se esconde en la
    oscuridad?<br />
    <br />
    Prepárate para sumergirte en el mundo de los Pokémon, donde la emoción y la
    aventura están a solo un clic de distancia. ¿Estás listo para aceptar el
    desafío? ¡Demuestra que tienes lo que se necesita para convertirte en un
    auténtico Maestro Pokémon! <br />
    <br />
    Haz clic en el botón de Juego en la barra de navegación o haz click
    <router-link to="/juego">aquí</router-link> y comienza tu viaje hacia la
    gloria en el juego de adivinar el Pokémon. ¡Buena suerte y que la diversión
    comience!
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
}

#pikachu {
  float: left;
  width: 25%;
  height: auto;
  margin: 30px;
}
</style>