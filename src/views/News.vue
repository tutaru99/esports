<template>
  <div>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12>
          <h1 class="mb-5" id="NewsHeadline">Whats going on at Esport Esbjerg</h1>
          
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex v-show="doneLoading" v-for="(wpitem, index) in wpitems.slice(0,1)" :key="index">
          <v-img :src="wpitem.imgurl" aspect-ratio="1.7778" max-height="600px">
            <v-layout align-end justify-start row fill-height>
              <v-flex lg7>
                
                <v-card-title  class="ma-5" id="Rectangle2">
               
                  <h2 class="mt-3" v-html="wpitem.title.rendered"/>
                
                  <p
                    class="mt-2" v-html="wpitem.content.rendered.slice(0,169) + '...' "/>
                  
                    <v-icon medium class="mr-2" color="#4b4e58">query_builder</v-icon>
                    <span id="date" v-html="wpitem.date.slice(0,10)"></span>
                    <v-spacer></v-spacer>
                    <router-link id="ghostbutton" to="/article"> Read More</router-link>
                    </v-card-title> 
                
              </v-flex>
            </v-layout>
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <hr class="mt-5">
    
    <v-container class="mt-5" grid-list-xl>
      <v-layout  justify-center align-start row wrap>
        <v-flex xs12 sm9>
          <h1 class="mb-5">All our news</h1>
          <v-card flat color="transparent"  v-show="doneLoading" v-for="(wpitem, index) in wpitems.slice(1)" :key="index">
          <v-card-title class="pb-3">
            <v-img :src="wpitem.imgurl" height="200px"/>
            <div class="pa-3">
              <h2 class="mt-3" v-html="wpitem.title.rendered.slice(0,69) + '...'" />
              <p class="mt-2" v-html="wpitem.content.rendered.slice(0,169) + '...' "/>
            </div>
            
            <v-icon medium class="mr-2 ml-3" color="#4b4e58">query_builder</v-icon>
            <span id="date" v-html="wpitem.date.slice(0,10)"></span>
    
              <v-spacer></v-spacer>
              <router-link class="pr-3" id="ghostbutton" to="/article"> Read More</router-link>
          </v-card-title> 
          <hr class="mb-5">
           </v-card>
           
        </v-flex>
        <v-flex xs12 sm3>
          <iframe
            src="https://discordapp.com/widget?id=577441083848654849&theme=dark"
            height="500px"
            allowtransparency="true"
            frameborder="0"
          ></iframe>   
          <br>
          <br>
          <iframe src='https://www.juicer.io/api/feeds/esport_esbjerg/iframe'
           frameborder='0' width='300' height='500' style='display:block;margin:0 auto;'></iframe>
        </v-flex>
      </v-layout>
    </v-container>

    <!--
    <v-container>
      <v-layout>
        <v-flex xs12>
          <iframe
            src="https://discordapp.com/widget?id=577441083848654849&theme=dark"
            height="500px"
            allowtransparency="true"
            frameborder="0"
          ></iframe>
        </v-flex>
      </v-layout>
    </v-container>-->
  </div>
</template>

<script>

import axios from "axios";
import joinnow from "../components/joinNow.vue";
import discord from "../components/discord.vue";

export default {
  data() {
    return {
      wpitems: {},
      imgurl: {},
      doneLoading: false
    };
  },
  async created() {
    const response = await axios.get(
      "https://esbjerg-esport.000webhostapp.com/wp-json/wp/v2/news"
    );
    this.wpitems = response.data;
    for (const wpitem of this.wpitems) {
      const imgData = await axios.get(
        "https://esbjerg-esport.000webhostapp.com/wp-json/wp/v2/media/" +
          wpitem.featured_media
      );
      wpitem.imgurl = imgData.data.media_details.sizes.medium.source_url;
    }
    this.doneLoading = true;
  },
  components: {
    "webapp-joinnow": joinnow,
    "webapp-discord": discord,
  },
  
};
</script>


<style scoped>

#NewsHeadline {
  text-align: center;
  margin-top: 20vh;
}

#Rectangle2 {
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px var(--light-periwinkle);
  background-color: #1c202b;
}
#date {
  text-align: left;
  font-family: "Open Sans", sans-serif;
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