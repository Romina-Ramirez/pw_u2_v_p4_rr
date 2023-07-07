import { createApp } from 'vue'
import App from './App.vue'
import './css/estilos.css'

// Se debe hacer una configuración del router para que aplique a toda la aplicación
import router from './router/router'

// Después de crear la aplicación y antes de que se monte se debe usar el método use
createApp(App).use(router).mount('#app')
