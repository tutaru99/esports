<template>
  <v-app id="App">
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
#app {
 background-image: url("./assets/Background_Pattern.svg");
 background-color: #131723;

}

*{
  font-family: 'Barlow Semi Condensed', sans-serif;
  text-transform: uppercase;

}
p{
  font-family: 'Open Sans', sans-serif;
}

</style>
