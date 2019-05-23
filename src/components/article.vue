<template>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3 v-show="doneLoading" v-for="(wpitem, index) in wpitems.slice(0,1)" :key="index">
      <v-card id="cardMore">
       <v-img :src="wpitem.imgurl" aspect-ratio="1.7778" max-height="600px">
    
            <v-card-title primary-title>
            <h2 class="mt-3" v-html="wpitem.title.rendered"/>               
            </v-card-title>
            <div class="text-xs-right  pr-5">
            <router-link class="hvr-underline-from-left pb-1" to="/projects">Back to Projects.</router-link>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
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
};
</script>



<style scoped>

</style>


