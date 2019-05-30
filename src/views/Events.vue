<template>
 <div>
  <v-container>
    <v-layout align-center justify-center wrap>
      <v-flex xs12 md6 lg12>
        <div class="mt-5">
          <h1 class="pa-3">UPCOMMING EVENTS</h1> <br>
          </div>

          </v-flex>
            </v-layout>
          </v-container>

                <v-container>
                  <v-layout align-center justify-center wrap>
                    <v-flex xs12 md6 class="ml-5 pl-3">
                      <div >
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FeSportEsbjerg%2F&tabs=events&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="500"
            height="500"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
                      </div>
      
      </v-flex>
    </v-layout>
  </v-container>
      <hr class="mt-5">
 
 <webapp-instagram/>
 <br>
 <hr class="mt-5">
 <br> <br> <br> <br>
 <webapp-schedule />

    </div>
  
</template>


<script>
import instagram from "../components/instagram.vue";
import schedule from  "../components/schedule.vue";
export default {
  components: {
    "webapp-instagram": instagram,
    'webapp-schedule': schedule,
  }
};
</script>




<style scoped>
h1{
  text-align: center;
  padding: 0;
}
</style>