<template>
  <v-app id="app">

    
   <webapp-navbar />
    <v-content>
      <router-view>
      </router-view>
    </v-content>
    <webapp-footer />
  </v-app>
</template>

<script>

import navbar from './components/navbar.vue'
import footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
  'webapp-navbar': navbar,
  'webapp-footer': footer,
  },
  data () {
    return {
      //
    }
  },
};
</script>

<style>
:root {
  --dark: #131723;
  --pale-sky-blue: #d7dfe2;
  --light-periwinkle: #cae1ff;
  --light-navy: #11537c;
  --bluish: #2c93c6;
  --gradient: linear-gradient(106deg, var(--bluish), var(--light-navy));
}
#app {
 background-image: url("./assets/Background_Pattern.svg");
 background-image: repeat;
 background-color: var(--dark);
}

*{
  font-family: 'Barlow Semi Condensed', sans-serif;
  
}
p{
  font-family: 'Open Sans', sans-serif;
}
</style>
