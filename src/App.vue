<template>
  <v-app id="app">

    
   <webapp-navbar />
      <v-content>
        <transition name="fade" mode="out-in">
      <router-view></router-view>
        </transition>
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
  --active-color: #2c93c6 !important;
    --border-color: #cae1ff  !important;
    --font-color: #cae1ff !important;
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
  border-radius: 4px;
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

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}


/*FAQ*/

.accordion{
  color: var(--light-periwinkle) !important;
   border: solid 1px var(--light-periwinkle) !important;
}
.accordion__item{
  color: var(--light-periwinkle) !important;
   border-bottom: solid 1px var(--light-periwinkle) !important;
}

.accordion__toggle-button[data-v-36e025b4]::before{
  background: #cae1ff !important;
}
.accordion__toggle-button[data-v-36e025b4]::after{
  background: #cae1ff !important;
}

.accordion__value {
    color: #cae1ff !important;
    font-size: 16px;
    opacity: 0.7;

}

/* Calendar*/

.v-calendar-daily__day-interval {
    background: rgba(255, 255, 255, 0.04) !important;
}
.v-calendar-daily__intervals-head {
   background: rgba(255, 255, 255, 0.04) !important;
}
.v-calendar-daily_head-day-label {
    background: rgba(255, 255, 255, 0.16) !important;
    color: var(--light-periwinkle) !important;
}

.v-calendar-daily_head-weekday {
  background: rgba(255, 255, 255, 0.16) !important;
  color: var(--light-periwinkle) !important;
    font-family: 'Open Sans', sans-serif !important;
}

.v-calendar-daily__interval-text {
   font-family: 'Open Sans', sans-serif !important;
   color: var(--light-periwinkle) !important;

}

.my-event {
background-c: 
}
.v-calendar {
    background: var(--dark) !important;
     border: solid 1px var(--light-periwinkle) !important;
}
</style>
