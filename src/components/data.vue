<template>
<div>
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
                    <p id="description" class="mt-2" v-html="wpitem.content.rendered.slice(0, 169) + '...'" />
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
</div>
  
</template>

<script>
import axios from 'axios';

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
   
}

</script>

<style scoped>
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
</style>