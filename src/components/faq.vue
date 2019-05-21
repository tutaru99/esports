<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 md6 lg6 x6>
          <h1>Frequently asked questions</h1>
        </v-flex>
        <v-flex id="faq" pa-5 xs12 md6 lg6 xl6>
          <v-expansion-panel
      v-model="panel"
      expand
      
    >
      <v-expansion-panel-content  class="ma-3">
        <template v-slot:header>
          <div>Item</div>
        </template>

        <v-card flat> 
          <v-card-text flat>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>

       <v-expansion-panel-content class="ma-3" >
        <template v-slot:header>
          <p>Item</p>
        </template>
        
        <div>
          <hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#faq {
  border-radius: 12px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px var(--light-periwinkle);
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--light-periwinkle);
}

.theme--light.v-expansion-panel .v-expansion-panel__container {
  border-radius: 8px !important;
  border: solid 1px var(--pale-sky-blue) !important;
  background-color: #262934 !important;
  color: white;
}
.theme--light.v-expansion-panel
  .v-expansion-panel__container
  .v-expansion-panel__header
  .v-expansion-panel__header__icon
  .v-icon {
  color: white !important;
}
#PrimaryButton {
  background-image: linear-gradient(106deg, var(--bluish), var(--light-navy));
  color: white;
  padding: 24px 24px 24px 24px;
  font-size: 18px;
}
</style>


