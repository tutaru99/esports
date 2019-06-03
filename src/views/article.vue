<template>
  <div>
    <v-container fluid>
            <v-layout justify-center align-center row fill-height>
                <v-flex xs12 id="bgimg">
                   
                </v-flex>
            </v-layout>
        </v-container>

   <v-container>
       <v-layout >
           <v-flex class="text" lg6>
               <h1  id="Headline" class="ml-5 mt-5 mb-3">
                   Top Esports Games in The World 2018
               </h1>
               <br>
<h2 class="mb-5 ml-5">Fortnite</h2>
               <p id="pf" class="mb-5 ml-5">
Epic Games’ Fortnite has taken the world of esports by storm with the growing popularity of the game, peaking viewership
 and its Twitch platform dominating the game streaming platform worldwide. Epic Games,
  a leading esports company launched Fortnite after recognizing the explosion of the battle royale
   genre. The company recently announced that it is going to offer US$100 million in Fortnite esports prize
    pools this year alone. Although several critics are questioning the significance of a battle royal game in
     esports, Epic Games is making the Fortnite competitive and has had a positive response so far. </p>
    
     <h2 class="mb-5 ml-5">Dota2</h2>
     <p id="pf" class="mb-5 ml-5">
       Dota 2 is one of the most popular competitive games and is much touted as the pioneer of esports industry, the one that proved esports games could go mainstream, be a career for people and become its own industry.  Dota 2 is a multiplayer online battle arena (MOBA) game, launched fully by one of the top esports companies; Valve in 2013 and since then, the game has gone on to conduct biggest esports events with highest esports tournament prize pool in the world. The International 2018: Dota 2 Championship esports tournament that was organized in Vancouver, Canada offered the highest prize pool of US$ 25.53 million.
     </p>
     <h2 class="mb-5 ml-5">League of Legends</h2>
     <p id="pf" class="mb-5 ml-5">
       League of Legends (LoL) is a leading MOBA game that was introduced by Riot Games to games in 2009 which became one of the most popular games in the esports industry. While the game had an estimated 70 million monthly active users in 2013, LoL now boasts more than 100 million active users.  The League of Legends World Championship tournaments that are organized by the company every year is touted as the most watched esports events. 2018 League of Legends World Championship reached a peak of more than 200 million concurrent viewers surpassing last year’s tournament viewership.
     </p>
      <h2 class="mb-5 ml-5">Overwatch</h2>
     <p id="pf" class="mb-5 ml-5">
       Overwatch is a leading first-person shooter by Blizzard, released in 2016 specifically for esports. The game features six gamers competing to protect selected zones from enemy capture. Blizzard has plenty of history in the e-sports industry, with StarCraft and other pioneering titles in the landscape. However, the leading esports game developer looked to something really different with Overwatch. Although this new game is the youngest player in the esports industry, Overwatch already has a vast number of professional leagues, players, and teams.
     </p>
           </v-flex>
       </v-layout>
   </v-container>

    <hr class="mt-5">

  <br>

    <v-container grid-list-md>
      <h1>More News</h1>
    <v-layout align-start justify-center row fill-height wrap>
      <v-flex d-flex xs12 sm6 md4 lg4 xl3>
          <div  class="Rectangle my-5 mx-2" color="transparent" dark>
            <v-img class="img" aspect-ratio="1.7" :src="require('./../assets/forknife.jpg')"></v-img>
            
          <h4 class="pa-2">Fortnite: Battle Royale has become 2018’s first real gaming phenomenon.</h4>
          <p class="mt-2 pa-3">A few years ago, no one had heard of Fortnite, the online shooter game in which 100 players fight it out to be the last person standing. Now it is the biggest video game in the world.</p>
          <v-icon medium class="mr-2 ml-3" color="#4b4e58">query_builder</v-icon><span> 23.05.2019</span>
          
           <router-link id="ghostbutton" class="ml-5 pl-5" to= "/article"> Read More</router-link>
          </div>
      </v-flex>

        <v-flex  d-flex xs12 sm6 md4 lg4 xl3>
       <div class="Rectangle my-5 mx-2" color="transparent" dark>
         <v-img class="img" aspect-ratio="1.7" :src="require('./../assets/football.jpg')"></v-img>
          <h4 class="pa-3">EfB indgår samarbejde med Bakkeskolen Cosmos om ny FIFA-linje</h4>
          <p class="mt-2 pa-2">EfB stiller fra det nye skoleår klubbens to FIFA-spillere Lasse Bækkelund og Christian Lillebæk til rådighed på Bakkeskolen Cosmos i et nyt samarbejde. De to E-sportsspillere skal undervise elever...</p>
          <v-icon medium class="mr-2 ml-3" color="#4b4e58">query_builder</v-icon><span> 26.05.2019</span>
          
           <router-link id="ghostbutton" class="ml-5 pl-5" to= "/article"> Read More</router-link>
       </div>
      </v-flex>

        <v-flex d-flex xs12 sm6 md4 lg4 xl3>
       <div class="Rectangle my-5 mx-2" color="transparent" dark> 
         <v-img class="img" aspect-ratio="1.7" :src="require('./../assets/pc.png')"></v-img>
           <h4 class="pa-2">We are starting to sell  custom made gaming PC's with the newest hardware</h4>
          <p class="mt-2 pa-3">West Jysk Computer Service is a computer business located in Varde. They repair all kinds of computers, both in hardware and software. In addition, they also have a large selection of them.</p>
          <v-icon medium class="mr-2 ml-3" color="#4b4e58">query_builder</v-icon><span> 27.05.2019</span>
          
           <router-link id="ghostbutton" class="ml-5 pl-5" to= "/article"> Read More</router-link>
       </div>
      </v-flex>
    </v-layout>
  </v-container>
  <webapp-discord />
</div>

</template>

<script>
import discord from '../components/discord.vue'
export default {
    components: {
  'webapp-discord': discord,
  },

};
</script>
<style scoped>
#pf{
    font-size: 16px;
}
#bgimg {
    background-image: url("../assets/esports.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 60vh;
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
  width: 400px;
  height: 500px;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px var(--light-periwinkle);
  background-color: var(--dark);
}

p {
    font-size: 13px;
}
</style>