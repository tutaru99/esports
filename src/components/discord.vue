<template>
    <!-- Discord -->

    <div >
        <v-container fluid  id="discord">
            <v-layout align-center justify-start row fill-height >
                <v-flex xs12 md7 offset-lg1 lg5 xl4 >
                    <h1 class="mb-4">Make your team Win</h1>
                    <ul>
                        <li>
                            <p class="mb-4">Talk to other members</p>
                        </li>
                         <li>
                            <p class="mb-4">Share files and links</p>
                        </li>
                         <li>
                            <p class="mb-4">Stay informed and in touch with others</p>
                        </li>
                         <li>
                            <p class="mb-4">Socialize outside practices</p>
                        </li>
                    </ul>
                </v-flex>
                <v-flex>
                    <v-img :src="require('./../assets/discord.png')"></v-img>
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
ul{
  color: var(--light-navy);
  
}

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

#discord {
 background-image: linear-gradient(106deg, var(--bluish), var(--light-navy));
 
}



</style>