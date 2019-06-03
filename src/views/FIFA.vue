<template>
  <div>
   <v-container fluid id="bgimg">
            <v-layout justify-center align-center row fill-height>
                <v-flex xs12 >
                    <h1  >SOON WE WILL OFFER FIFA TRAINING</h1>
                </v-flex>
            </v-layout>
        </v-container>

    
   <v-container class="Rectangle">
       <v-layout >
           <v-flex class="text" lg6>
               <h1   id="Headline" class="ml-5 mt-5 mb-3">
                   WHAT IS FIFA?
               </h1>
               <p id="pf" class="mb-5 ml-5">FIFA, also known as FIFA Football or FIFA Soccer,
                  is a series of association football video games or football 
                  simulator, released annually by Electronic Arts under the EA Sports label.</p>
           </v-flex>
           <v-flex lg6>
               <v-img  class="img" :src="require('./../assets/fich.png')"></v-img>
           </v-flex>
       </v-layout>
   </v-container>
  


   <v-container grid-list-md>
    <v-layout align-start justify-center row fill-height wrap>
      <v-flex d-flex xs12 sm6 md3 lg3 xl3>
          <div
           data-aos="fade-right"
                   data-aos-delay="200"
                  data-aos-duration="1700"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false" class="my-5 mx-2" color="transparent" dark>
          <h4>COMMUNICATION</h4>
          <p class="mt-2">The game has built-in VOIP which can be adjust in the game launcher.</p>
          </div>
      </v-flex>

        <v-flex  d-flex xs12 sm6 md3 lg3 xl3>
       <div 
        data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="1700"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false" class="my-5 mx-2" color="transparent" dark> 
          <h4>INGAME ECONOMY</h4>
          <p class="mt-2">In game shop offers a wide variety of packages to buy. From ingame currency to a number of DLCs. </p>
       </div>
      </v-flex>

        <v-flex d-flex xs12 sm6 md3 lg3 xl3>
       <div 
        data-aos="fade-right"
                   data-aos-delay="600"
                  data-aos-duration="1700"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false" class="my-5 mx-2" color="transparent" dark> 
          <h4>GAME AWARENESS</h4>
         
          <p class="mt-2"> Game introduces us to "timed finishing"— where the kick button may be pressed 
             a second time to determine the exact moment the ball is actually kicked, "Dynamic Tactics"— which 
              allows players 
            to configure strategies, and switch between them in real-time during a match.</p>
       </div>
      </v-flex>
      
        <v-flex d-flex xs12 sm6 md3 lg3 xl3>
       <div 
        data-aos="fade-right"
                   data-aos-delay="800"
                  data-aos-duration="1700"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false" class="my-5 mx-2" color="transparent" dark> 
          <h4>TACTICS AND STRATEGY</h4>
          <p class="mt-2">The game-changing animation system, which brought player
             personality and increased fidelity in movement to EA SPORTS FIFA, returns with
              increased coverage across the pitch. Enhanced animations for tactical shielding,
               impact balancing, and physical
             jostles bring realistic player movement.</p>
       </div>
      </v-flex>
    </v-layout>
  </v-container>
  
<webapp-schedule />

</div>

</template>

<script>
import schedule from  "../components/schedule.vue";
export default {
  components: {
  'webapp-schedule': schedule,
  },
  

};

</script>


<style scoped>
#pf{
    font-size: 16px;
}
#bgimg {
    background-image: url("../assets/fibg.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
}


#Headline{
    text-align: left;
}

h1 {
    text-align: center;
}

.Rectangle {
  width: 100%;
height: 350px;
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px var(--light-periwinkle);
  background-color: var(--dark);
  position: relative;
}

.img {
     bottom: 164px;
    max-width:566px;
   max-height: 566px;
    z-index: 1;

}

p {
    font-size: 13px;
}
.item {
    min-height: 50px;
    min-width: 80px;
    margin: 10px;
  }
.Rectangle2 {
  
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px var(--light-periwinkle);
  background-color: var(--dark);
}
</style>