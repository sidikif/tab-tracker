<template>
  <v-app>
    <v-toolbar dark class="primary" app>
      <v-toolbar-title  class="headline text-camelcase">
        <router-link to="/" tag="span" style="cursor: pointer">TabTracker</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          to="about"
        >
          <v-icon center>business</v-icon>
          About
        </v-btn>
        <v-btn
          flat
          to="register"
        >
          <v-icon center>person_add</v-icon>
          Register
        </v-btn>
        <v-btn
          flat
          to="login"
        >
          <v-icon center>fingerprint</v-icon>
          Login
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-layout
          text-xs-center
          wrap
        >
          <v-flex xs12>
            <router-link to="/">Home</router-link> |
            <router-link to="about">About</router-link> |
            <router-link to="register">Register</router-link>
          </v-flex>
        </v-layout>
      </v-container>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

  export default {
  name: 'App',
  components: {


  },
  data () {
    return {
      //
    }
  }
}
</script>
