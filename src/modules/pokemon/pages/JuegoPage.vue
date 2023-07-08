<template>
  <div class="container">
    <img
      id="logo"
      src="../store/Logo.png"
      alt="No se puede mostrar la imagen."
    />
    <p>
      En este juego, tu misión es descubrir la verdadera identidad de los
      Pokémon a través de sus sombras misteriosas. <br />
      <br />
      Cada turno te presentará una imagen enigmática de un Pokémon. Debes
      confiar en tu conocimiento y observación para seleccionar la opción
      correcta.
    </p>
    <ol>
      <li>
        En cada turno, se te mostrará la sombra misteriosa de un Pokémon en la
        pantalla.
      </li>
      <li>Bajo la sombra, verás cuatro opciones de Pokémon diferentes.</li>
      <li>
        Tu objetivo es seleccionar la opción que creas que corresponde a la
        verdadera identidad del Pokémon en sombra.
      </li>
      <li>
        Tienes un total de tres intentos por cada Pokémon. Si aciertas en el
        primer intento, ganarás 5 puntos. Si aciertas en el segundo intento,
        obtendrás 2 puntos. Si necesitas el tercer intento para acertar, ganarás
        1 punto. Si no logras adivinar correctamente, no recibirás ningún punto.
      </li>
      <li>
        No hay límite de tiempo para tomar tu decisión. Puedes analizar las
        opciones con calma antes de hacer tu elección.
      </li>
      <li>
        Una vez que hayas seleccionado una opción, se te notificará si tu
        respuesta es correcta o incorrecta. Además, se te mostrará la identidad
        del Pokémon real.
      </li>
      <li>
        Tendrás la opción de probar con otras sombras, todo depende de ti.
      </li>
      <li>
        ¡Demuestra tus habilidades de adivinanza y conviértete en un auténtico
        Maestro Pokémon!
      </li>
    </ol>
    <p>
      ¡Prepárate para sumergirte en el emocionante juego de adivinar el Pokémon
      y descubre cuántos Pokémon puedes reconocer a través de sus sombras! Estás
      a solo unos clics de embarcarte en esta increíble aventura. ¿Estás listo
      para adivinar los Pokémon y ganar puntos valiosos?
    </p>
    <router-link to="/juego" id="confirmar">Sí</router-link>
    <div>
      <img
        id="pokemons"
        src="../store/pokemons.png"
        alt="No se puede mostrar la imagen."
      />
    </div>
  </div>
</template>

<script >
export default {};
</script>

<style scoped>
ol {
  margin-right: 50px;
  margin-left: 70px;
  font-size: 24px;
  text-align: justify;
}

li {
  margin-bottom: 15px;
}

#confirmar {
  border: 2px solid #27cce2;
  border-radius: 5px;
  cursor: pointer;
  background-color: #82f0ff;
  padding: 10px 70px;
  font-weight: bold;
  font-size: large;
  text-decoration: none;
  color: black;
}

#confirmar:hover {
  background-color: #27cce2;
  border: 2px solid #138a9a;
}

#pokemons {
  width: 30%;
  height: auto;
  margin-top: 50px;
}
</style>