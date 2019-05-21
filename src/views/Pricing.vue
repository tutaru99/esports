<template>
    <div>
     <div fluid id="BgPreview">
        <v-container align-content-center id="imgContainer">
            <v-layout align-center justify-center row fill-height >
                <v-flex xs12 md7 lg5 xl4>
                    <h1 class="mb-4" >Our Pricing Models</h1>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    
    <v-container >
        <v-layout justify-center align-center wrap>
            <v-flex  xs12 md6 lg3 xl3>
                <div class="pa-3" id="rectangle">
                <h5>BASIC</h5>
                <h2>100KR / YEAR</h2>
                <div class="path-4"></div>
                <br>
                <ul>
                <li><p>Discord Access</p></li>
                <li><p>Teamspeak Access</p></li>
                <li><p>Member offers</p></li>
                <li><p>Discounts of club events</p></li>
                <li><p>Server benefits</p></li>
                <li><p>You support the Organisation</p></li>
                </ul>
                <v-btn block id="getStarted" flat color="#ffffff" >Get Started</v-btn>
                </div>
            </v-flex>
            <v-flex xs12 md6 lg3 xl3>
                <div class="pa-3" id="rectangle">
                  <h5>MEDIUM</h5>
                <h2>300KR / 6 Mth.</h2>
                <div class="path-4"></div>
                <br>
                <ul>
                <li><p>All benefits of BASIC</p></li>
                <li><p>Training 1x a week</p></li>
                <li><p>Sport workout</p></li>
                <li><p>Stress exercise</p></li>
               
                </ul>
                <v-btn block id="getStarted" flat color="#ffffff" >Get Started</v-btn>  
                </div>
                 </v-flex>
            <v-flex  xs12 md6 lg3 xl3>
                <div class="pa-3" id="premiumRectangle">
                <h5>PREMIUM</h5>
                <h2>500KR / 6 MTH.</h2>
                <div class="path-4"></div>
                <br>
                <ul>
                <li><p>All benefits of BASIC</p></li>
                <li><p>Teamspeak Access</p></li>
                <li><p>Member offers</p></li>
                <li><p>Discounts of club events</p></li>
                <li><p>Server benefits</p></li>
                <li><p>You support the Organisation</p></li>
                </ul>
                <v-btn block id="getStarted" flat color="#ffffff" >Get Started</v-btn>
                </div>
                 </v-flex>
            <v-flex  xs12 md6 lg3 xl3>
                <div class="pa-3" id="rectangle">
                 <h5>PROFESSIONAL</h5>
                <h2>750KR / 6 MTH.</h2>
                <div class="path-4"></div>
                <br>
                <ul>
                <li><p>All benefits of BASIC</p></li>
                <li><p>Teamspeak Access</p></li>
                <li><p>Member offers</p></li>
                <li><p>Discounts of club events</p></li>
                <li><p>You support the Organisation</p></li>
                </ul>
                <v-btn block id="getStarted" flat color="#ffffff" >Get Started</v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
            <faq />
</div>
</template>

<script>
import faq from '../components/faq.vue'


export default {
    components: {
  'faq': faq,
 
  },
}
</script>
<style scoped>
#BgPreview {
    background-image: url("../assets/picture-1.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
}
#imgContainer {
        height: 60vh;
 }

 #rectangle {
  width: 268px;
  height: 475px;
  border-radius: 12px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px var(--light-periwinkle);
  background-color: var(--dark);
   font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.2px;
  color: var(--light-periwinkle);
 }
 #premiumRectangle {
  width: 268px;
  height: 535px;
  border-radius: 12px;
  box-shadow: 0 14px 28px 0 rgba(0, 0, 0, 0.1), 0 10px 10px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px var(--light-periwinkle);
  background-color: var(--dark);
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.2px;
  color: var(--light-periwinkle);
}
.path-4 {
  width: 204px;
  height: 1px;
  border: solid 1px var(--light-periwinkle);
}
#getStarted {
  font-size: 18px; 
  height: 45px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1.5px;
  border-image-source: linear-gradient(104deg, var(--bluish), var(--light-navy));
  border-image-slice: 1;
}
ul{
  color: var(--bluish);
  
}
h5{
    font-size: 14px;
    
}
</style>