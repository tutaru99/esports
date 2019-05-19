<template>
    <div>
        <v-container fluid id="joinNow">
           <v-layout align-center justify-center column fill-height >
                <v-flex xs12 md6 lg5 xl4 >
                    <h1 class="mb-4 mt-4">Join us now!</h1>
                </v-flex>
                <v-flex xs12 md7 lg5 xl4 >
                    <v-btn id="PrimaryButton" class="ma-0 mb-4" to="/pricing">Start Now</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

:root {
  --dark: #131723;
  --pale-sky-blue: #d7dfe2;
  --light-periwinkle: #cae1ff;
  --light-navy: #11537c;
  --bluish: #2c93c6;
  --gradient: linear-gradient(106deg, var(--bluish), var(--light-navy));
}
 #joinNow {
    background-image: linear-gradient(106deg, var(--bluish), var(--light-navy));
 }

 #PrimaryButton {
  background: var(--dark);
  padding: 24px 24px;
  font-size: 18px;  
}

</style>