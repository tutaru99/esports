<template>
  <div>
    <v-container fluid id="bgimg">
            <v-layout justify-center align-center row fill-height>
                <v-flex xs12 >
                    <h1  >WE OFFER OVerwatch TRAINING</h1>
                </v-flex>
            </v-layout>
        </v-container>

   <v-container  class="Rectangle">
       <v-layout >
           <v-flex class="text" lg6>
               <h1  id="Headline" class="ml-5 mt-5 mb-3">
                   WHAT IS OVERWATCH?
               </h1>
               <p id="pf" class="mb-5 ml-5">Overwatch is a team-based multiplayer first-person shooter.
                  Often described as a "hero shooter", 
                 Overwatch assigns players into two teams of six, with each player selecting from a roster 
                 of 31 characters, known as "heroes", 
                 each with a unique style of play whose roles are divided into three general categories that fit their role. </p>
           </v-flex>
           <v-flex lg6>
               <v-img  class="img" :src="require('./../assets/owch.png')"></v-img>
           </v-flex>
       </v-layout>
   </v-container>

<v-container grid-list-md>
    <v-layout align-start justify-center row fill-height wrap>
      <v-flex d-flex xs12 sm6 md3 lg3 xl3>
          <div class="my-5 mx-2" color="transparent" dark>
          <h4>COMMUNICATION</h4>
          <p class="mt-2">Overwatch has a built-in voice comms, as well as
             chat-wheel with premade voices for every situation needed 
            and if that is not enough - there is a ping system in place, so that players can ping locations they want.</p>
          </div>
      </v-flex>

        <v-flex  d-flex xs12 sm6 md3 lg3 xl3>
       <div class="my-5 mx-2" color="transparent" dark> 
          <h4>INGAME ECONOMY</h4>
          <p class="mt-2">As you play games of Overwatch, you’ll gain levels, 
            unlocking new customization options to make your heroes
             look and sound unique! Customize your characters in the Hero Gallery</p>
       </div>
      </v-flex>

        <v-flex d-flex xs12 sm6 md3 lg3 xl3>
       <div class="my-5 mx-2" color="transparent" dark> 
          <h4>GAME AWARENESS</h4>
         
          <p class="mt-2">There are many ways to play Overwatch. We recommend starting with the tutorial
             to learn the fundamentals of play; once you’ve completed it, head to the Main Menu to try out several different 
             game modes.</p>
       </div>
      </v-flex>
      
        <v-flex d-flex xs12 sm6 md3 lg3 xl3>
       <div class="my-5 mx-2" color="transparent" dark> 
          <h4>TACTICS AND STRATEGY</h4>
          <p class="mt-2">When you enter a game of Overwatch, you'll need to choose a hero to play.
Maybe a cannon-toting ape from the moon appeals to you. 
Perhaps you prefer a time-traveling freedom fighter. Or is a beat-dropping battlefield DJ
 more your style? Whoever you want to be, there's an Overwatch hero for you.</p>
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
    background-image: url("../assets/owbg.png");
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
     bottom: 200px;
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