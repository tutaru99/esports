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

#PrimaryButton {
  background-image: linear-gradient(106deg, var(--bluish), var(--light-navy));
  color: white;
  padding: 24px 24px;
  font-size: 18px;  
}

h1{
  font-size: 50.9px;
  line-height: 1.06;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
}

h2{
  font-size: 36px;
  line-height: normal;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
}

h3{
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 25.5px;
  line-height: normal;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
}

.v-content {
  padding: 0px !important;
}
</style>
