<template>
  <div>
    <v-container fluid id="bgimg">
            <v-layout justify-center align-center row fill-height>
                <v-flex xs12 >
                    <h1  >WE OFFER CS:GO TRAINING</h1>
                </v-flex>
            </v-layout>
        </v-container>

   <v-container  class="Rectangle">
       <v-layout >
           <v-flex class="text" lg6>
               <h1  id="Headline" class="ml-5 mt-5 mb-3">
                   WHAT IS CS:GO?
               </h1>
               <p id="pf" class="mb-5 ml-5">Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person team-based shooter. 
                 The game pits two teams against each other: the Terrorists and the Counter-Terrorists. 
                 Both sides are tasked with eliminating the other while also completing separate objectives. </p>
           </v-flex>
           <v-flex lg6>
               <v-img  class="img" :src="require('./../assets/csch.png')"></v-img>
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
          <p class="mt-2">Communication is an essential skill in the game of Counter-Strike. 
            It is generally used for coordinating strategies, 
            informing teammates of valuable information and enhancing team play/coordination.</p>
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
          <p class="mt-2">All team members have their own pot of money that 
            shifts and changes based on the events detailed above, and how you choose to manage your 
            money has a significant impact on the rest of the team's purchasing plans.</p>
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
         
          <p class="mt-2">Gamesense allows you to make a judgement about where your
             opponents are on the map and what kind of gear they’re carrying. If your gamesense 
             is good enough, you’ll have
             a much easier time getting into bombsites, clutching rounds and countering flanking maneuvers.</p>
       </div>
      </v-flex>
      
        <v-flex d-flex xs12 sm6 md3 lg3 xl3>
       <div  data-aos="fade-right"
                   data-aos-delay="800"
                  data-aos-duration="1700"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false" class="my-5 mx-2" color="transparent" dark> 
          <h4>TACTICS AND STRATEGY</h4>
          <p class="mt-2">Success in Counter-Strike: Global Offensive will be determined by three factors:
             skill, strategy and team play. When it comes to skill you will have to grind out your reflexes, 
             crosshair placement and spray control. This can only be achieved through play time and practice.</p>
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
    background-image: url("../assets/csbg.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
}

#imgcontainer {
        height: 60vh;
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
     bottom: 145px;
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

</style>