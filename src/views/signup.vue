<template>
  <div>
    <v-container class="signup">
      <v-layout justify-center align-center wrap>
        <v-flex xs12 md6>
          <h1 class="mb-4">Welcome to our Registration</h1>
          <p
            class="mb-5"
          >Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it.</p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container >
      <v-layout justify-center align-center wrap>
        <div class="hidden-sm-and-down">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScPOmikORrssE2xX_EgE8VaCT5llGh46dW2uGDJTvRLhaNSJg/viewform?embedded=true"
            width="640"
            height="1447"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >Loading...</iframe>
        </div>
        <div class="hidden-md-and-up">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScPOmikORrssE2xX_EgE8VaCT5llGh46dW2uGDJTvRLhaNSJg/viewform?embedded=true"
            width=""
            height="1447"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >Loading...</iframe>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

p {
  text-align: center;
}

.signup {
  margin-top: 20vh;
}
</style>