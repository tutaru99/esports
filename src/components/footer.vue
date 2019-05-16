 <template>
 
  <v-container>
      <v-layout column fill-height>
            <v-flex xs12 xl3 lg3 md4>
                <router-link to="/" class="ma-3">
                    <img src="../assets/logo.png" alt="Logo" height="137px" class="mt-5">
                </router-link>
                <h3 class="mb-3">ESPORT ESBJERG</h3>
                <h4 class="mb-3">+45 76 16 30 50 <br> INFO@esport-esbjerg.dk <br> STREET 10 <br> 6700 ESBJERG</h4>
            </v-flex>
        </v-layout>
        <hr class="mb-2">
        <v-layout>
            <router-link to="/" >Privacy Policy</router-link>
            <v-spacer></v-spacer>
            <p>2019</p>
      </v-layout>
  </v-container>
  
 </template>


<script>
export default {
    
}

</script>
 

<style>

h4 {
font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 2.6px;
  color: #cae1ff;
  text-transform: uppercase;
}


h3{
font-size: 25.5px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
}

hr {
    color: #cae1ff;
}

a {font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #cae1ff;
  text-decoration: none;
 }

 p {font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #cae1ff;
  text-decoration: none;
 }
</style>
    