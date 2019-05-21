<template>
<div>
    <div fluid id="bgimg">
        <v-container id="imgcontainer">
            <v-layout align-center justify-center column fill-height>
                <v-flex xs12>
                    <h1 class="mt-5">WE OFFER FORTNITE TRAINING</h1>
                </v-flex>
                  </v-layout>
        </v-container>
          
    </div>
<div >
   <v-container  class="Rectangle">
       <v-layout >
           <v-flex class="text" lg6>
               <h1 class="ml-5 mt-5 mb-3">
                   WHAT IS FORTNITE?
               </h1>
               <p id="pf" class="mb-5 ml-5">Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF. Use your Control as a paint brush, a conductor’s baton or a weaponized ice cream cone that launches Rocky Road at 14 scoops per second.</p>
           </v-flex>
           <v-flex lg6>
               <v-img  class="img" :src="require('./../assets/fch.png')"></v-img>
           </v-flex>
       </v-layout>
   </v-container>
   </div>


    <v-container grid-list-md>
    <v-layout align-center justify-center row fill-height>
      <v-flex class="ma-2" v-for="Info in Infos" v-bind:key="Info.id"  xs12 md3 lg3 xl3>
          <h4>{{Info.Title}}</h4>
          <p>{{Info.descriptionText}}</p>
      </v-flex>
    </v-layout>
  </v-container>
  

   <v-container class="Rectangle2">
        <v-layout align-center justify-center column fill-height>
            <v-flex xs12>
                <h1 class="mt-5">OUR TRAINING SCHEDULE</h1>
            </v-flex>
        </v-layout>
   </v-container>
</div>

</template>

<script>
export default {
    data() {
            return {
                Infos: [
                    { 
                    id: 1, 
                    Title: 'Communication', 
                    descriptionText: 'Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF.', 
                    },
                    { 
                    id: 2, 
                    Title: 'Ingame Economy', 
                    descriptionText: 'Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF.', 
                    },
                    { 
                    id: 3, 
                    Title: 'Game Awareness', 
                    descriptionText: 'Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF.', 
                    },
                    { 
                    id: 4, 
                    Title: 'Tactics and strategy', 
                    descriptionText: 'Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF.', 
                    },
                ]}}
};
</script>


<style scoped>
#pf{
    font-size: 16px;
}
#bgimg {
    background-image: url("../assets/fbg.png");
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
    bottom: 242px;
    max-width:566px;
   max-height: 566px;
    z-index: 1;

}

.text {
    position: relative;
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
  width: 1169px;
  height: 819px;
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px var(--light-periwinkle);
  background-color: var(--dark);
}
</style>