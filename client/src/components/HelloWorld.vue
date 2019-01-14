<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          {{msg}}
        </h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  props: ['msg'],

}
</script>
