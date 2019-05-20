 <template>
  <v-toolbar app flat height="100">
    <router-link to="/" class="ma-3">
      <img src="../assets/logo.png" alt="Logo" height="137px" class="mt-5">
    </router-link>

    <v-toolbar-title>
      <router-link to="/Pricing" class="ma-3">Pricing</router-link>
      <div class="dropdown">
        <router-link  to="/" class="ma-3">Games</router-link>
        <v-container fluid class="dropdown-content">
          <v-container>
            <h3>GAMES WE OFFER</h3>
            <v-layout align-center justify-center class="row">
              <v-flex>
                <router-link to="/Fortnine" class="ma-3">
                  <v-img height="151px" width="268px" :src="require('./../assets/fortnite.png')"></v-img>
                </router-link>
              </v-flex>
              <v-flex>
                <router-link to="/Csgo" class="ma-3">
                  <v-img height="151px" width="268px" :src="require('./../assets/cs.png')"></v-img>
                </router-link>
              </v-flex>
              <v-flex>
                <router-link to="/" class="ma-3">
                  <v-img height="151px" width="268px" :src="require('./../assets/ow.png')"></v-img>
                </router-link>
              </v-flex>
              <v-flex>
                <router-link to="/" class="ma-3">
                  <v-img height="151px" width="268px" :src="require('./../assets/fifa.png')"></v-img>
                </router-link>
              </v-flex>
            </v-layout>
          </v-container>
        </v-container>
      </div>
      <router-link to="/News" class="ma-3">News</router-link>
      <router-link to="/about" class="ma-3">About</router-link>
      <router-link to="/Events" class="ma-3">Events</router-link>
    </v-toolbar-title>
  </v-toolbar>
</template>

    <script>
export default {};
</script>
    
    <style scoped>
* {
  font-family: "Open Sans", sans-serif;
}
a {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--light-periwinkle);
  text-decoration: none;
}
.v-toolbar {
  background-color: transparent;
}

h3 {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 25.5px;
  line-height: normal;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
}

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  width: 100%;
  left: 0;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1), 0 6px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #2f333d;
  z-index: 1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
    