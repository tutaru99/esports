<template>
  <div>
    <div fluid id="BgPreview">
      <v-container align-content-center id="imgContainer">
        <v-layout align-center justify-center row fill-height>
          <v-flex xs12 md7 lg5 xl4>
            <h1 class="mb-4">Our Pricing Models</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container grid-list-xl>
      <v-layout justify-center align-center  fill-height wrap>
        <v-flex xs12 md6 lg3 xl3>
          <div class="pa-4" id="rectangle">
            <h5>BASIC</h5>
            <h2>100KR / YEAR</h2>
           <hr class="mt-1">
            <ul class="mt-3">
              <li>
                <p>Discord Access</p>
              </li>
              <li>
                <p>Teamspeak Access</p>
              </li>
              <li>
                <p>Member offers</p>
              </li>
              <li>
                <p>Discounts of club events</p>
              </li>
              <li>
                <p>Server benefits</p>
              </li>
              <li>
                <p>You support the Organisation</p>
              </li>
            </ul>
            
            <v-btn block id="getStarted" flat color="#ffffff">Get Started</v-btn>
          </div>
        </v-flex>
        <v-flex xs12 md6 lg3 xl3>
          <div class="pa-4" id="rectangle">
            <h5>MEDIUM</h5>
            <h2>300KR / 6 Mth.</h2>
            <hr class="mt-1">
            <ul class="mt-3">
              <li>
                <p>All benefits of BASIC</p>
              </li>
              <li>
                <p>Training 1x a week</p>
              </li>
              <li>
                <p>Sport workout</p>
              </li>
              <li>
                <p>Stress exercise</p>
              </li>
            </ul>
            
            <v-btn block id="getStarted" flat color="#ffffff">Get Started</v-btn>
          </div>
        </v-flex>
        <v-flex xs12 md6 lg3 xl3>
          <div class="pa-4" id="premiumRectangle">
            <h5>PREMIUM</h5>
            <h2>500KR / 6 MTH.</h2>
            <hr class="mt-1">
            <ul class="mt-3">
              <li>
                <p>All benefits of BASIC</p>
              </li>
              <li>
                <p>Teamspeak Access</p>
              </li>
              <li>
                <p>Member offers</p>
              </li>
              <li>
                <p>Discounts of club events</p>
              </li>
              <li>
                <p>Server benefits</p>
              </li>
              <li>
                <p>You support the Organisation</p>
              </li>
            </ul>
           
            <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn id="PrimaryButton" v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
          </div>
        </v-flex>
        <v-flex xs12 md6 lg3 xl3>
          <div class="pa-4" id="rectangle">
            <h5>PROFESSIONAL</h5>
            <h2>750KR / 6 MTH.</h2>
            <hr class="mt-1">
            <ul class="mt-3">
              <li>
                <p>All benefits of BASIC</p>
              </li>
              <li>
                <p>Teamspeak Access</p>
              </li>
              <li>
                <p>Member offers</p>
              </li>
              <li>
                <p>Discounts of club events</p>
              </li>
              <li>
                <p>You support the Organisation</p>
              </li>
            </ul>
            <v-btn block id="getStarted" flat color="#ffffff">become a pro</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <webapp-faq />
  </div>
</template>

<script>
import faq from "../components/faq.vue";

export default {
  
   data: () => ({
      dialog: false
    }),
  components: {
    'webapp-faq': faq,
  }
};
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
#PrimaryButton {
  background-image: linear-gradient(106deg, var(--bluish), var(--light-navy));
  color: white;
  padding: 0px 0px !important;
  font-size: 18px;
}
#rectangle {
  height: 500px;
  border-radius: 12px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px var(--light-periwinkle);
  background-color: rgba(255, 255, 255, 0.08);
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1.2px;
  color: var(--light-periwinkle);
}
#premiumRectangle {
  margin: 0px -12px;
  height: 550px;
  border-radius: 12px;
  box-shadow: 0 14px 28px 0 rgba(0, 0, 0, 0.1), 0 10px 10px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px var(--light-periwinkle);
  background-color: rgba(255, 255, 255, 0.16);
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
  position: relative;
  font-size: 18px;
  height: 45px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1.5px;
  border-image-source: linear-gradient(
    104deg,
    var(--bluish),
    var(--light-navy)
  );
  border-image-slice: 1;
}

ul {
  color: var(--bluish);
}
h5 {
  font-size: 14px;
}
</style>