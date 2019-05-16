 <template>
        <v-toolbar app flat height="100">
            <router-link to="/" class="ma-3">
                <img src="../assets/logo.png" alt="Logo" height="137px" class="mt-5">
            </router-link>
            <v-toolbar-title>
                <router-link to="/" class="ma-3">
                Home
            </router-link>
            <router-link to="/about" class="ma-3">
                About
            </router-link>
            <router-link to="/Events" class="ma-3">
                Events
            </router-link>                
            <router-link to="/Games" class="ma-3">
                Games
            </router-link>         
            <router-link to="/News" class="ma-3">
                News
            </router-link>      
            <router-link to="/Pricing" class="ma-3">
                Pricing
            </router-link>    
            </v-toolbar-title>
            </v-toolbar>
 </template>

    <script>
  export default {
    data: () => ({
      items: [
        'All', 'Family', 'Friends', 'Coworkers'
      ]
    })
  }
</script>
    
    <style scoped>
*{
  font-family: 'Open Sans', sans-serif;
}
 a{font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--light-periwinkle);
  text-decoration: none;
 }
.v-toolbar{
background-color:transparent;
}

    </style>
    