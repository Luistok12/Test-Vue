import { createRouter, createWebHistory } from 'vue-router';
// import App from '../src/App.vue';
import CategoriaElectrodomesticosApp from '../src/components/contents/categories/CategoriaElectrodomesticosApp.vue';
import CategoriaComestiblesApp from '../src/components/contents/categories/CategoriaComestiblesApp.vue';
import CategoriaBebidasApp from '../src/components/contents/categories/CategoriaBebidasApp.vue';
import CategoriaGolosinasApp from '../src/components/contents/categories/CategoriaGolosinasApp.vue';
import SucursalesApp from '../src/components/contents/SucursalesApp.vue';
import GaleriaApp from '../src/components/contents/GaleriaApp.vue';
import AcercaApp from '../src/components/contents/AcercaApp.vue';
import inicioApp from '../src/components/contents/inicioApp.vue';

const routes = [
  { path: '/', component: inicioApp },                  // Enrutado normal
  { path: '/inicio', redirect: '/' },
  // Siempre crear un inicio, nunca usar app.vue como componente para ser enrutado
  { path: '/categorias',     // Enrutado anidado
  children: [
    { path: '/electrodomesticos', component: CategoriaElectrodomesticosApp },
    { path: '/comestibles', component: CategoriaComestiblesApp },
    { path: '/bebidas', component: CategoriaBebidasApp },
    { path: '/golosinas', component: CategoriaGolosinasApp }
    ]
  },                        //
  { path: '/sucursales', component: SucursalesApp },
  { path: '/acerca', component: AcercaApp },
  { path: '/galeria', component: GaleriaApp }
];

const router = createRouter({     // Crea una instancia del enrutador en la constante router para luego poder exportarlo
  history: createWebHistory(),    // Habilita el enrutamiento en HTML5
  routes                          // Array que contiene las rutas que defini anteriormente
});

export default router;

// Ojo, hubo problemas de versiones de vue 3 con vue router (Usaba el 1.x.x)