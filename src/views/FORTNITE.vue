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
               <p id="pf" class="mb-5 ml-5">Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF. Use your Control as a paint brush, a conductor’s baton or a weaponized ice cream cone that launches Rocky Road at 14 scoops per second.</p>
           </v-flex>
           <v-flex lg6>
               <v-img  class="img" :src="require('./../assets/fch.png')"></v-img>
           </v-flex>
       </v-layout>
   </v-container>



    <v-container grid-list-md>
    <v-layout align-center justify-center row fill-height wrap>
      <v-flex d-flex xs12 sm6 md3 lg3 xl3>
          <div class="my-5 mx-2" color="transparent" dark>
          <h4>COMMUNICATION</h4>
          <p class="mt-2">psum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alien</p>
          </div>
      </v-flex>

        <v-flex  d-flex xs12 sm6 md3 lg3 xl3>
       <div class="my-5 mx-2" color="transparent" dark> 
          <h4>INGAME ECONOMY</h4>
          <p class="mt-2">psum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alien</p>
       </div>
      </v-flex>

        <v-flex d-flex xs12 sm6 md3 lg3 xl3>
       <div class="my-5 mx-2" color="transparent" dark> 
          <h4>GAME AWARENESS</h4>
         
          <p class="mt-2">psum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alien</p>
       </div>
      </v-flex>
      
        <v-flex d-flex xs12 sm6 md3 lg3 xl3>
       <div class="my-5 mx-2" color="transparent" dark> 
          <h4>TACTICS AND STRATEGY</h4>
          <p class="mt-2">psum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alien</p>
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