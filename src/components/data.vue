<template>
<div>
 
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
</style>