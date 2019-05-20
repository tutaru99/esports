<template>
<div>
     <div fluid id="BgPreview">
        <v-container id="imgContainer">
            <v-layout align-center justify-start row fill-height >
                <v-flex xs12 md7 lg5 xl4>
                    <h1 class="mb-4">Want to step up your E-Sport Game?</h1>
                    <p class="mb-4">eSport Esbjerg is a public education association that gathers gaming interested people - young and old.</p>
                    <v-btn id="PrimaryButton" class="ma-0" to="/pricing">Start Now</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    <v-container grid-list-xl class="hidden-sm-and-down">
            <v-layout justify-center align-center row>
                <v-flex xs3 >
                    <div id="sponsor"></div>
                </v-flex>
                <v-flex xs3>
                    <div id="sponsor"></div>
                </v-flex>
               <v-flex xs3>
                    <div id="sponsor"></div>
                </v-flex>
            </v-layout>
        </v-container>
        <div fluid id="Info_1">
        <v-container  id="imgContainer">
            <v-layout align-center justify-start row fill-height >
                <v-flex xs12 offset-lg6 md7 lg6 xl4 >
                    <h1 class="mb-4">Make your team Win</h1>
                    <ul>
                        <li>
                            <p class="mb-4">eSport Esbjerg is a public education association that gathers gaming interested people - young and old.</p>
                        </li>
                         <li>
                            <p class="mb-4">eSport Esbjerg is a public education association that gathers gaming interested people - young and old.</p>
                        </li>
                         <li>
                            <p class="mb-4">eSport Esbjerg is a public education association that gathers gaming interested people - young and old.</p>
                        </li>
                         <li>
                            <p class="mb-4">eSport Esbjerg is a public education association that gathers gaming interested people - young and old.</p>
                        </li>

                    </ul>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    <div fluid id="Info_2">
        <v-container  id="imgContainer">
            <v-layout align-center justify-end row fill-height >
                <v-flex xs12 md7 lg6 xl4 >
                    <h1 class="mb-4">High end computer hardware</h1>
                    <ul>
                        <li>
                            <p class="mb-4">eSport Esbjerg is a public education association that gathers gaming interested people - young and old.</p>
                        </li>
                         <li>
                            <p class="mb-4">eSport Esbjerg is a public education association that gathers gaming interested people - young and old.</p>
                        </li>
                         <li>
                            <p class="mb-4">eSport Esbjerg is a public education association that gathers gaming interested people - young and old.</p>
                        </li>
                         <li>
                            <p class="mb-4">eSport Esbjerg is a public education association that gathers gaming interested people - young and old.</p>
                        </li>
                    </ul>
                </v-flex>
            </v-layout>
        </v-container>
    </div>


    <!-- JOIN NOW -->
    <webapp-joinnow />
        <v-container>
            <v-layout align-center justify-center column fill-height>
                 <v-flex xs12>
                <h1 class="mt-5">NEWS</h1>
                 </v-flex>
            </v-layout>
        </v-container>

<v-container>
    <v-layout row>
        <v-flex xs12 sm8 offset-sm2>   
                <v-card flat color="transparent">
                <v-img src="https://scontent.faar2-1.fna.fbcdn.net/v/t1.15752-9/60335904_2179405048843405_3713206390844555264_n.jpg?_nc_cat=101&_nc_ht=scontent.faar2-1.fna&oh=a6dc7dd1e8ee26978149919542944f82&oe=5D709D39"
                height="200px">
                </v-img>
            <v-card-title primary-title class="white--text">
                <div>
                    <h2>E BANKS THAT ACCEPT US CASINO PLAYERS</h2>
                    <p class="mt-2" >While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it provides, others may experience gam…</p>
                </div>
                <v-spacer></v-spacer>
                <router-link id="ghostbutton" to="/">Read More</router-link>
            </v-card-title>  
                </v-card>
                    <hr class="mb-5"> 
        </v-flex>
        
    </v-layout>
    

    <v-layout row>
        <v-flex xs12 sm8 offset-sm2>   
                <v-card flat color="transparent">
                <v-img src="https://scontent.faar2-1.fna.fbcdn.net/v/t1.15752-9/60509183_878543045820266_2942794317137182720_n.jpg?_nc_cat=104&_nc_ht=scontent.faar2-1.fna&oh=18ae3fd94795c6ae7df325963e436fbc&oe=5D9DCEBD"
                height="200px">
                </v-img>
            <v-card-title primary-title class="white--text">
                <div>
                <div  class="headline">E BANKS THAT ACCEPT US CASINO PLAYERS</div>
                <span >While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun and excitement it provides, others may experience gam…</span>
                </div>
            </v-card-title>
             <router-link  to="/">Read More</router-link>
                </v-card>
                <hr class="mb-2"> 
        </v-flex>
        
    </v-layout>
</v-container>

<v-container fluid>
    <v-layout align-center justify-center column fill-height> 
        <v-flex xs12 md7 lg5 xl4 > 
            <v-btn id="PrimaryButton" class="ma-0" to="/news">MORE ARTICLES</v-btn>
        </v-flex>
    </v-layout>
</v-container>

<webapp-discord />

</div>
  
</template>

<script>
import joinnow from '../components/joinNow.vue'
import discord from '../components/discord.vue'

export default {
    components: {
  'webapp-joinnow': joinnow,
  'webapp-discord': discord,
  },
}
</script>

<style scoped>

#ghostbutton {
    color: white;
}


#sponsor {
margin: 32px 0px 32px 0px;
  height: 106px;
  opacity: 0.2;
  background-color: #ffffff;
}

#BgPreview {
    background-image: url("../assets/picture-1.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
}

#Info_1 {
    background-image: url("../assets/picture-2.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
}

#Info_2 {
    background-image: url("../assets/picture-3.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
    text-align: right;
    direction: rtl;
}


p{font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--light-periwinkle);
  text-decoration: none;
 }

 #imgContainer {
        height: 60vh;
 }



ul{
  color: var(--bluish);
  
}

</style>