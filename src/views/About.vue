<template>
  <div>
    <v-container fluid id="bgimg">
      <v-layout justify-center align-center row fill-height>
        <v-flex xs12>
          <h1>Get to know us</h1>
        </v-flex>
      </v-layout>
    </v-container>
    <div>
      <v-container class="mt-5" id="Rectangle">
        <v-layout fill-height wrap>
          <v-flex class="pa-5" xs12 lg6>
            <h1 id="Headline" class="pb-3" >WHO ARE WE?</h1>
            <p
              id="pf"
              class=""
            >Wield unworldly power with Magic Leap One’s Control. An engineering marvel, it doesn’t require any additional external sensors to deliver six degrees of freedom, also known as 6DoF. Use your Control as a paint brush, a conductor’s baton or a weaponized ice cream cone that launches Rocky Road at 14 scoops per second.</p>
          </v-flex>
          <v-flex xs12 lg6>
            <v-img class="img" :src="require('./../assets/auch.jpg')"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container class="mt-5">
      <v-layout align-center justify-center fill-height >
        <v-flex xs12>
          <h1 class="my-5">JOIN OUR INSTAGRAM</h1>
          <!-- LightWidget WIDGET -->

          <iframe
            src="//lightwidget.com/widgets/aebecd1f6e5c54eebd66695466e454cb.html"
            scrolling="no"
            allowtransparency="true"
            class="lightwidget-widget"
            style="width:100%;border:0;overflow:hidden;"
          ></iframe>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
#pf {
  font-size: 16px;
}
#bgimg {
  background-image: url("../assets/aboutus.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
}


#Headline {
  text-align: left;
}

h1 {
  text-align: center;
}

#Rectangle {
  padding: 0px !important;
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border: solid 1px var(--light-periwinkle);
  background-color: var(--dark);
}

.img{
  border-radius: 8px;
}
</style>