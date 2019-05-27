 <template>
  <div>
    
    <v-toolbar class="hidden-md-and-down" app flat height="100">
      <router-link to="/" class="ma-3">
        <img src="../assets/logo.png" alt="Logo" height="137px" class="mt-5">
      </router-link>

      <v-toolbar-title>
        <router-link to="/Pricing" class="ma-3">Pricing</router-link>
        <div class="dropdown">
          <router-link to="/" class="ma-3">Games</router-link>
          <v-container fluid class="dropdown-content">
            <v-container>
              <h3>GAMES WE OFFER</h3>
              <v-layout align-center justify-center class="row">
                <v-flex>
                  <router-link to="/Fortnite" class="ma-3">
                    <v-img height="151px" width="268px" :src="require('./../assets/fortnite.png')"></v-img>
                  </router-link>
                </v-flex>
                <v-flex>
                  <router-link to="/Csgo" class="ma-3">
                    <v-img height="151px" width="268px" :src="require('./../assets/cs.png')"></v-img>
                  </router-link>
                </v-flex>
                <v-flex>
                  <router-link to="/Overwatch" class="ma-3">
                    <v-img height="151px" width="268px" :src="require('./../assets/ow.png')"></v-img>
                  </router-link>
                </v-flex>
                <v-flex>
                  <router-link to="/Fifa" class="ma-3">
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
      
      <v-spacer></v-spacer>
<div data-aos="fade-down"
    data-aos-easing="ease-in-back"
    data-aos-duration="1400"
    data-aos-offset="750">
      <v-btn id="PrimaryButton" to="/pricing">Get Started</v-btn>
</div>
    </v-toolbar>

    <nav class="hidden-lg-and-up" role="navigation">
      <div id="menuToggle">
        <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
        -->
        <input type="checkbox">

        <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
        -->
        <span></span>
        <span></span>
        <span></span>

        <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
        -->
        <ul id="menu">
            <li>
          <router-link  class="my-2" to="/">Home</router-link>
           <br>
              </li>
              <li>
          <router-link to="/pricing">Pricing</router-link>
          <br>
              </li>
          <li>
            <!-- First Tier Drop Down -->

            <label for="drop-1" class="toggle">Games +</label>
            <a class="mb-3" href="#">Games</a>
            <hr class="mt-3">
            <input type="checkbox" id="drop-1">
            <ul>
              <li>
                <router-link to="/Fortnite">Fortnite</router-link>
                <br>
              </li>
              <li>
                <router-link to="/Csgo">CSGO</router-link>
                 <br>
              </li>
              <li>
                <router-link to="/overwatch">Overwatch</router-link>
                 <br>
              </li>
              <li>
                <router-link to="/Fifa">Fifa</router-link>
                <br>
              </li>
            </ul>
          </li>
           <hr>
          <li>
          <router-link class="my-2" to="/news">News</router-link>
           <br>
              </li>
              <li>
          <router-link class="my-2" to="/about">About</router-link>
           <br>
              </li>
              <li>
          <router-link  class="my-2" to="/events">Events</router-link>
           <br>
              </li>
          <v-btn   class="my-2" id="PrimaryButton" to="/pricing">Get Started</v-btn>
          <br>
        </ul>
      </div>
    </nav>
  </div>
</template>

    <script>
export default {
  data() {
    return {
      drawer: null,

      mini: false,
      right: null
    };
  }
};
</script>
    
    <style scoped>
:root {
  --dark: #131723;
  --pale-sky-blue: #d7dfe2;
  --light-periwinkle: #cae1ff;
  --light-navy: #11537c;
  --bluish: #2c93c6;
  --gradient: linear-gradient(106deg, var(--bluish), var(--light-navy));
}
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

#Games_Mobile {
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
  background-color: #131723;
}

#mobileMenu {
  z-index: 2;
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

/* Navbar container */
.navbar {
  overflow: hidden;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

#PrimaryButton {
  background-image: linear-gradient(106deg, var(--bluish), var(--light-navy));
  color: white;
  padding: 24px 24px;
  font-size: 18px;
}

/* Mobile Menu */

#menuToggle {
  display: block;
  position: relative;
  top: 50px;
  left: 50px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #cae1ff;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #cae1ff;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;

  background: #131723;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
  list-style: none;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul {
  transform: none;
}

.toggle,
[id^="drop"] {
  display: none;
}

</style>
    