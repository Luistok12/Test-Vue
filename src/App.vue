<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <HeaderApp />
  <NavbarApp />
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }

import HeaderApp from './components/HeaderApp.vue';
import NavbarApp from './components/NavbarApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    NavbarApp
  }
}

</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  display: flex;
  flex-direction: column;
}

* {
  padding: 0;
  margin: 0;
  font-family: Verdana;
}
</style>
