<template>
<div>
     <div fluid id="BgPreview">
        <v-container id="imgContainer">
            <v-layout align-center justify-start row fill-height >
                <v-flex xs12 md7 lg5 xl4 >
                    <h1 class="mb-4">Want to step up your E-Sport Game?</h1>
                    <p class="mb-4">eSport Esbjerg is a public education association that gathers gaming interested people - young and old.</p>
                    <v-btn id="PrimaryButton" class="ma-0" to="/pricing">Start Now</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    <v-container grid-list-xl class="hidden-sm-and-down">
            <v-layout row>
                <v-flex xs3 >
                    <div id="sponsor"></div>
                </v-flex>
                <v-flex xs3>
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
    <webapp-joinnow />
</div>

</template>

<script>
import joinnow from '../components/joinNow.vue'

export default {
    components: {
  'webapp-joinnow': joinnow,
  },
}
</script>

<style scoped>

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
    height: 600px;
}

#Info_1 {
    background-image: url("../assets/picture-2.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
}

#Info_2 {
    background-image: url("../assets/picture-3.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
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