<template>
    <div>
        <v-container class="mt-5" grid-list-xl>
      <v-layout  justify-center align-start row wrap>
        <v-flex xs12 sm9>   
            <v-img :src="wpitem.imgurl" height="200px"/>
            <div class="pa-3">
              <h2 class="mt-3">{{ Headline }} </h2>
              <p class="mt-2" v-html="wpitem.content.rendered.slice(0,169) + '...' "/>
            </div>
            <div class="px-3 pb-3">
              <v-icon medium color="#4b4e58">query_builder</v-icon>
              <span id="date" v-html="wpitem.date.slice(0,10)"></span>
            </div>
            <hr class="mb-5">
          
        </v-flex>
      </v-layout>
    </v-container>

    </div>
</template>

<script>
    export default {
        props: ['id','Headline', 'content', 'date', 'image'],
    }
</script>

<style lang="scss" scoped>

</style>