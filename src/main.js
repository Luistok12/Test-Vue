import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // Asegúrate de que la ruta sea correcta

const app = createApp(App);             // Vue 3
app.use(router); // Agrega el enrutador a la aplicación
app.mount('#app');

// createApp(App).mount('#app')            Normal
