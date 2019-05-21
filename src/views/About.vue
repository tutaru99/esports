<template>
 <div>
    <div fluid id="bgimg">
        <v-container id="imgcontainer">
            <v-layout align-center justify-center column fill-height>
                <v-flex xs12>
                    <h1 class="mt-5">ABOUT US</h1>
                </v-flex>
                  </v-layout>
        </v-container>
          
    </div>
<div >
    
   <v-container class="Rectangle">
       <v-layout >
           <v-flex class="text" lg6>
               <h1 class="ml-5 mt-5 mb-3">
                  WHO ARE WE?
               </h1>
               <p id="pf" class="mb-5 ml-5">Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF. Use your Control as a paint brush, a conductor’s baton or a weaponized ice cream cone that launches Rocky Road at 14 scoops per second.</p>
           </v-flex>
           <v-flex lg6>
               <v-img  class="img" :src="require('./../assets/auch.jpg')"></v-img>
           </v-flex>
       </v-layout>
   </v-container>
   </div>

   <v-container>
            <v-layout align-center justify-center column fill-height>
                 <v-flex xs12>
                <h1 class="mt-5">JOIN OUR INSTAGRAM</h1>
                 </v-flex>
            </v-layout>
        </v-container>

    <vue-instagram token="302718137.1677ed0.4586ebcf8b684a94a7a20e10d228d4d8" :count="5" :tags="['hashtag1', 'hashtag2']" mediaType="image">
        <template slot="feeds" slot-scope="props">
            <li class="fancy-list"> {{ props.feed.link }} </li>
        </template>
        <template slot="error" slot-scope="props">
            <div class="fancy-alert"> {{ props.error.error_message }} </div>
        </template>
    </vue-instagram>

    </div>
</template>


<script>

import VueInstagram from 'vue-instagram'


export default {
     name: 'App',

  components: {
    VueInstagram
  }

}
</script>

<style scoped>
#pf{
    font-size: 16px;
}
#bgimg {
    background-image: url("../assets/aboutus.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
}

#imgcontainer {
        height: 60vh;
 }

h1{
align-content: center !important;
align-items: center !important;
justify-content: center !important;
justify-items: center !important;
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
     bottom: 10px;
    max-width:566px;
   max-height: 566px;
    z-index: 1;

}

</style>