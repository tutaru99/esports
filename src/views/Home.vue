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

<v-container grid-list-xl> 
    <v-layout v-show="doneLoading" v-for="(wpitem, index) in wpitems.slice(0, 2)" :key="index" justify-center align-center wrap>
        <v-flex  xs12 sm8>
                    <v-img :src="wpitem.imgurl"  aspect-ratio="3" />
                <div class="pa-4">
                    <h1 class="mt-3" v-html= "wpitem.title.rendered" />
                    <p id="description" class="mt-2" v-html="wpitem.content.rendered.slice(0, 30) + ' ...'" />
                    </div>
                    <div>
                    <v-icon medium color="#4b4e58">query_builder</v-icon>
                    <span id="date" v-html="wpitem.date.slice(0,10)"></span>
                    <router-link id="ghostbutton" to="/"> Read More</router-link>
                </div>
                <hr class="mb-5"> 
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
import axios from 'axios';
import joinnow from '../components/joinNow.vue'
import discord from '../components/discord.vue'

export default {
    data() {
        return {
            wpitems: {},
            imgurl: {},
            doneLoading : false
        };
    },
async created() {
    const response = await axios.get('https://esbjerg-esport.000webhostapp.com/wp-json/wp/v2/news');
    this.wpitems = response.data;
    for(const wpitem of this.wpitems) {
    const imgData = await axios.get('https://esbjerg-esport.000webhostapp.com/wp-json/wp/v2/media/' + wpitem.featured_media)
    wpitem.imgurl = imgData.data.media_details.sizes.medium.source_url
    }
    this.doneLoading = true
},
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


/*

#description {
    width: 50ch;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

*/

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

 #date{
     text-align: left;
     font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  opacity: 0.5;
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