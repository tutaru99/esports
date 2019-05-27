<template>
  <div class="mt-5">
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs12 md6 lg6 xl6 >
          <h1>Frequently asked questions</h1>
        </v-flex>
        <v-flex id="faq" class="pa-3" xs12 md6>
         <!-- <VueFaqAccordion :items="myItems"/> -->
          <v-btn id="PrimaryButton" to="/rules" class="mt-5">Our Rules</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
 
<script>
//import VueFaqAccordion from "vue-faq-accordion"; 

export default {
}
</script>


<style scoped>
#faq {
  border-radius: 12px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px var(--light-periwinkle);
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--light-periwinkle);
}

#PrimaryButton {
  background-image: linear-gradient(106deg, var(--bluish), var(--light-navy));
  color: white;
  padding: 24px 24px 24px 24px;
  font-size: 18px;
}

.faq {
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;

  letter-spacing: normal;
  color: #cae1ff !important;
  text-decoration: none;
}

.accordion__item{
  border-radius: 12px !important;
  color: var(--light-periwinkle) !important;
   border-bottom: solid 1px var(--light-periwinkle) !important;
}

</style>


