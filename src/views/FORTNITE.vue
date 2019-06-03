<template>
<div>
    
  
        <v-container fluid id="bgimg">
            <v-layout justify-center align-center row fill-height>
                <v-flex xs12 >
                    <h1  >WE OFFER FORTNITE TRAINING</h1>
                </v-flex>
            </v-layout>
        </v-container>

   <v-container  class="Rectangle">
       <v-layout >
           <v-flex lg6>
               <h1  id="Headline" class="ml-5 mt-5 mb-3">
                   WHAT IS FORTNITE?
               </h1>
               <p id="pf" class="mb-5 ml-5">Fortnite is a survival game where 100 players 
                   fight against each other in player versus player combat to be the last one standing. 
                   It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking 
                   is a must in order to survive. There are an estimated 125 million players on Fortnite.</p>
           </v-flex>
           <v-flex lg6>
               <v-img  class="img" :src="require('./../assets/fch.png')"></v-img>
           </v-flex>
       </v-layout>
   </v-container>



    <v-container grid-list-md>
    <v-layout align-start justify-center row fill-height wrap>
      <v-flex d-flex xs12 sm6 md3 lg3 xl3>
          <div data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1700"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
                  class="my-5 mx-2" color="transparent" dark>
          <h4>COMMUNICATION</h4>
          <p class="mt-2">There is a social element to the game, users can play 
              in groups or two or more and chat to each other on headsets or text 
              chat during the game. Fortnite has become the most viewed game in history on
               YouTube. There are a number of popular social media influencers or YouTube
               personalities who also play the game and provide tutorials on how to achieve a higher score.</p>
          </div>
      </v-flex>

        <v-flex  d-flex xs12 sm6 md3 lg3 xl3>
       <div 
       data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="1700"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
       class="my-5 mx-2" color="transparent" dark> 
          <h4>INGAME ECONOMY</h4>
          <p class="mt-2">Epic Games quite cleverly tease gamers with
               new updates, new offers and new ways to play. Fortnite will soon be released on mobile devices.
               Users can unlock new items for free by continuing to play the game free of charge.</p>
       </div>
      </v-flex>

        <v-flex d-flex xs12 sm6 md3 lg3 xl3>
       <div   
                  data-aos="fade-right"
                 data-aos-delay="600"
                  data-aos-duration="1700"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
       
       class="my-5 mx-2" color="transparent" dark> 
          <h4>GAME AWARENESS</h4>
         
          <p class="mt-2">Fortnite is a game of survival, which means in order
               to win, you must defeat the other 99 online players in the game. This competitive 
               element adds a touch of urgency to the game, gamers also need to avoid being caught in
               the eye of the storm to remain in the game, there are regular countdowns to 
               when the storm is approaching.</p>
       </div>
      </v-flex>
      
        <v-flex d-flex xs12 sm6 md3 lg3 xl3>
       <div 
      data-aos="fade-right"
                  data-aos-delay="800"
                  data-aos-duration="1700"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false" 
       class="my-5 mx-2" color="transparent" dark> 
          <h4>TACTICS AND STRATEGY</h4>
          <p class="mt-2">Fortnite
Players skydive onto a small island, are equipped with an axe and must 
scavenge for more weapons, while simultaneously avoiding a killer electrical storm. As 
players are eliminated, the field of play also gets smaller, meaning players are put closer together. 
Updates regularly flash on screen detailing how another player was killed.</p>
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
    line-height: 1.7;
}
#bgimg {
    background-image: url("../assets/fbg.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
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
    bottom: 242px;
    max-width:566px;
   max-height: 566px;
    z-index: 1;

}

#Headline{
    text-align: left;
}

h1 {
    text-align: center;
}
p {
    font-size: 14px;
}
.item {
    min-height: 50px;
    min-width: 80px;
    margin: 10px;
  }

</style>